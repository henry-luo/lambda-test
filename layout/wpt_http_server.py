"""Serve pinned WPT HTTP resources until the owning runner closes stdin."""
import json
from pathlib import Path
import sys

sys.dont_write_bytecode = True
root = Path(sys.argv[1]).resolve()
sys.path.insert(0, str(root / 'tools'))
import localpaths
from wptserve import WebTestHttpd
from wptserve.config import ConfigBuilder
from wptserve.logger import get_logger
from wptserve.request import Server

server = WebTestHttpd(host='127.0.0.1', port=0, doc_root=str(root))
with ConfigBuilder(get_logger(), subdomains={'www2'}, browser_host='localhost',
                   alternate_hosts={'alt': '127.0.0.1'},
                   ports={'http': [server.port, server.port], 'https': [8443, 8444]}) as config:
    settings = dict(config.__dict__)
    # These runners capture HTTP fixtures; secure-origin variants require TLS setup.
    settings['ports'] = {'http': [server.port, server.port], 'https': [8443, 8444]}
    Server.config = type(config)(settings)
    server.start()
    try:
        print(json.dumps({'port': server.port}), flush=True)
        sys.stdin.buffer.read()
    finally:
        server.stop()
