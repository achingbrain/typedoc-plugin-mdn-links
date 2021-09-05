const webPages = new Set([
    // DOM interfaces
    "Attr",
    "CDATASection",
    "CharacterData",
    "Comment",
    "CustomEvent",
    "Document",
    "DocumentFragment",
    "DocumentType",
    "DOMException",
    "DOMImplementation",
    "DOMString",
    "DOMTimeStamp",
    "DOMStringList",
    "DOMTokenList",
    "Element",
    "Event",
    "EventTarget",
    "HTMLCollection",
    "MutationObserver",
    "MutationRecord",
    "NamedNodeMap",
    "Node",
    "NodeFilter",
    "NodeIterator",
    "NodeList",
    "ProcessingInstruction",
    "Selection",
    "Range",
    "Text",
    "TextDecoder",
    "TextEncoder",
    "TimeRanges",
    "TreeWalker",
    "URL",
    "Window",
    "Worker",
    "XMLDocument",

    // SVG interfaces
    "SVGAElement",
    "SVGAnimationElement",
    "SVGAnimateElement",
    "SVGAnimateMotionElement",
    "SVGAnimateTransformElement",
    "SVGCircleElement",
    "SVGClipPathElement",
    "SVGComponentTransferFunctionElement",
    "SVGCursorElement",
    "SVGDefsElement",
    "SVGDescElement",
    "SVGElement",
    "SVGEllipseElement",
    "SVGFEBlendElement",
    "SVGFEColorMatrixElement",
    "SVGFEComponentTransferElement",
    "SVGFECompositeElement",
    "SVGFEConvolveMatrixElement",
    "SVGFEDiffuseLightingElement",
    "SVGFEDisplacementMapElement",
    "SVGFEDistantLightElement",
    "SVGFEDropShadowElement",
    "SVGFEFloodElement",
    "SVGFEFuncAElement",
    "SVGFEFuncBElement",
    "SVGFEFuncGElement",
    "SVGFEFuncRElement",
    "SVGFEGaussianBlurElement",
    "SVGFEImageElement",
    "SVGFEMergeElement",
    "SVGFEMergeNodeElement",
    "SVGFEMorphologyElement",
    "SVGFEOffsetElement",
    "SVGFEPointLightElement",
    "SVGFESpecularLightingElement",
    "SVGFESpotLightElement",
    "SVGFETileElement",
    "SVGFETurbulenceElement",
    "SVGFilterElement",
    "SVGForeignObjectElement",
    "SVGGElement",
    "SVGGeometryElement",
    "SVGGradientElement",
    "SVGGraphicsElement",
    "SVGImageElement",
    "SVGLinearGradientElement",
    "SVGLineElement",
    "SVGMarkerElement",
    "SVGMaskElement",
    "SVGMetadataElement",
    "SVGMPathElement",
    "SVGPathElement",
    "SVGPatternElement",
    "SVGPolylineElement",
    "SVGPolygonElement",
    "SVGRadialGradientElement",
    "SVGRectElement",
    "SVGScriptElement",
    "SVGSetElement",
    "SVGStopElement",
    "SVGStyleElement",
    "SVGSVGElement",
    "SVGSwitchElement",
    "SVGSymbolElement",
    "SVGTextContentElement",
    "SVGTextElement",
    "SVGTextPathElement",
    "SVGTextPositioningElement",
    "SVGTitleElement",
    "SVGTSpanElement",
    "SVGUseElement",
    "SVGViewElement",

    // SVG data type interfaces
    "SVGAngle",
    "SVGLength",
    "SVGLengthList",
    "SVGNumber",
    "SVGNumberList",
    "SVGPreserveAspectRatio",
    "SVGStringList",
    "SVGTransform",
    "SVGTransformList",

    // Animated type
    "SVGAnimatedAngle",
    "SVGAnimatedBoolean",
    "SVGAnimatedEnumeration",
    "SVGAnimatedInteger",
    "SVGAnimatedLength",
    "SVGAnimatedLengthList",
    "SVGAnimatedNumber",
    "SVGAnimatedNumberList",
    "SVGAnimatedPoints",
    "SVGAnimatedPreserveAspectRatio",
    "SVGAnimatedRect",
    "SVGAnimatedString",
    "SVGAnimatedTransformList",

    // SMIL-related interfaces
    "TimeEvent",

    // Other SVG interfaces
    "SVGUnitTypes",
]);

export function resolveDomName(name: string) {
    if (webPages.has(name)) {
        return `https://developer.mozilla.org/en-US/docs/Web/API/${name}`;
    }
}