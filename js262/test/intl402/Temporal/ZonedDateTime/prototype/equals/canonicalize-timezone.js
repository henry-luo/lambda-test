

/*---
esid: sec-use-of-iana-time-zone-database
description: >
  Primary and non-primary time zone identifiers must correspond with IANA Time
  Zone Database Zones and Link names, subject to explicit exceptions, and must
  direct time zone name canonicalization.
info: |
    AvailableNamedTimeZoneIdentifiers ( )

    1. Let _identifiers_ be a List containing the String value of each Zone or Link name in the IANA Time Zone Database.
    2. ...
    3. ...
    4. Let _result_ be a new empty List.
    5. For each element _identifier_ of _identifiers_, do
      a. Let _primary_ be _identifier_.
      b. If _identifier_ is a Link name in the IANA Time Zone Database and _identifier_ is not present in the “TZ” column of <code>zone.tab</code> of the IANA Time Zone Database, then
        i. Let _zone_ be the Zone name that _identifier_ resolves to, according to the rules for resolving Link names in the IANA Time Zone Database.
        ii. If _zone_ starts with *"Etc/"*, then
          1. Set _primary_ to _zone_.
        iii. Else,
          1. Let _identifierCountryCode_ be the <a href="https://www.iso.org/glossary-for-iso-3166.html">ISO 3166-1 Alpha-2</a> country code whose territory contains the geographical area corresponding to _identifier_.
          2. Let _zoneCountryCode_ be the ISO 3166-1 Alpha-2 country code whose territory contains the geographical area corresponding to _zone_.
          3. If _identifierCountryCode_ is _zoneCountryCode_, then
            a. Set _primary_ to _zone_.
          4. Else,
            a. Let _countryCodeLineCount_ be the number of lines in file <code>zone.tab</code> of the IANA Time Zone Database where the “country-code” column is _identifierCountryCode_.
            b. If _countryCodeLineCount_ is 1, then
              i. Let _countryCodeLine_ be the line in file <code>zone.tab</code> of the IANA Time Zone Database where the “country-code” column is _identifierCountryCode_.
              ii. Set _primary_ to the contents of the “TZ” column of _countryCodeLine_.
            c. Else,
              i. Let _backzone_ be *undefined*.
              ii. Let _backzoneLinkLines_ be the List of lines in the file <code>backzone</code> of the IANA Time Zone Database that start with either *"Link "* or *"#PACKRATLIST zone.tab Link "*.
              iii. ...
              iv. Assert: _backzone_ is not *undefined*.
              v. Set _primary_ to _backzone_.
      c. If _primary_ is one of *"Etc/UTC"*, *"Etc/GMT"*, or *"GMT"*, set _primary_ to *"UTC"*.
      d. ...
      e. Let _record_ be the Time Zone Identifier Record { [[Identifier]]: _identifier_, [[PrimaryIdentifier]]: _primary_ }.
      f. Append _record_ to _result_.
    6. ...
    7. Return _result_.

    GetAvailableNamedTimeZoneIdentifier ( _timeZoneIdentifier_ )

    1. For each element _record_ of AvailableNamedTimeZoneIdentifiers(), do
      a. If _record_.[[Identifier]] is an ASCII-case-insensitive match for _timeZoneIdentifier_, return record.
    2. Return ~empty~.

    CreateDateTimeFormat ( _newTarget_, _locales_, _options_, _required_, _defaults_ )

    29. If IsTimeZoneOffsetString(_timeZone_) is *true*, then
      ...
    30. Else,
      a. Let _timeZoneIdentifierRecord_ be GetAvailableNamedTimeZoneIdentifier(_timeZone_).
      b. If _timeZoneIdentifierRecord_ is ~empty~, throw a RangeError exception.
      c. Set _timeZone_ to _timeZoneIdentifierRecord_.[[PrimaryIdentifier]].
features: [Temporal, canonical-tz]
---*/

const timeZones = [
  
  ["Europe/Prague", "Europe/Prague"],

  
  ["Europe/Bratislava", "Europe/Bratislava"],

  
  ["Australia/Canberra", "Australia/Sydney"],

  
  ["Atlantic/Jan_Mayen", "Arctic/Longyearbyen"],

  
  ["Pacific/Truk", "Pacific/Chuuk"],

  
  ["Etc/UCT", "UTC"],

  
  ["Etc/GMT0", "UTC"]
];

for (const [timeZone, linkTarget] of timeZones) {
  const z1 = new Temporal.ZonedDateTime(0n, timeZone);
  const z2 = new Temporal.ZonedDateTime(0n, linkTarget);
  assert(
    z1.equals(z2),
    "Time zone name " + timeZone + " should be canonicalized to " + linkTarget
  );
}
