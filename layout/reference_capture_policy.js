// snapshot references freeze animation effects except fixtures that test them.
function referenceCaptureFreezesAnimations(htmlFilePath) {
    return !/animation|interpolation/i.test(htmlFilePath || '');
}

module.exports = { referenceCaptureFreezesAnimations };
