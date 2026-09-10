// snapshot references freeze animation effects except fixtures that test them.
function referenceCaptureFreezesAnimations(htmlFilePath) {
    return !/animation|interpolation/i.test(htmlFilePath || '');
}

// Conformance fixtures declare a snapshot state; web templates exercise the
// browser event loop, including library cleanup after load.
function referenceCaptureFreezesTimers(htmlFilePath) {
    return !/(?:^|[\\/])web-tmpl(?:[\\/]|$)/i.test(htmlFilePath || '');
}

// Browser references wait 200ms after resources and fonts settle. Preserve the
// same observable timer window in the headless layout capture.
function referenceCapturePostLoadSettleMs(htmlFilePath) {
    return referenceCaptureFreezesTimers(htmlFilePath) ? 0 : 200;
}

// Layout references model the checked-in fixture tree. Remote services can
// append transient UI that Radiant cannot obtain from the fixture itself.
function referenceCaptureBlocksRemoteResources(htmlFilePath) {
    return !!htmlFilePath;
}

module.exports = {
    referenceCaptureFreezesAnimations,
    referenceCaptureFreezesTimers,
    referenceCapturePostLoadSettleMs,
    referenceCaptureBlocksRemoteResources
};
