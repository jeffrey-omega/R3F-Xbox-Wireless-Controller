export interface IScene {
  readonly name?: string;
  readonly version?: number;
  readonly setup?: string;
  readonly productGroups?: ProductGroups;
  readonly elements?: Element[];
}

export interface Element {
  readonly name?: string;
  readonly type?: string;
  readonly active?: boolean;
  readonly translation?: number[];
  readonly rotation?: number[];
  readonly scale?: number[];
  readonly toneMapping?: string;
  readonly backgroundEnabled?: boolean;
  readonly glowLayerEnabled?: boolean;
  readonly glowLayerBlurKernelSize?: number;
  readonly glowLayerIntensity?: number;
  readonly maxHardwareScalingLevel?: number;
  readonly minHardwareScalingLevel?: number;
  readonly useDynamicHardwareScaling?: boolean;
  readonly aasamples?: number;
  readonly fxaaEnabled?: boolean;
  readonly index?: number;
  readonly color?: string;
  readonly intensity?: number;
  readonly angle?: number;
  readonly exponent?: number;
  readonly position?: number[];
  readonly direction?: number[];
  readonly target?: number[];
  readonly fov?: number;
  readonly near?: number;
  readonly far?: number;
  readonly minDistance?: number;
  readonly maxDistance?: number;
  readonly minPolarAngle?: number;
  readonly maxPolarAngle?: number;
  readonly minAzimuthAngle?: number;
  readonly maxAzimuthAngle?: number;
}

export interface ProductGroups {
  readonly product?: Product;
}

export interface Product {
  readonly activeOption?: string;
  readonly productOptions?: ProductOptions;
}

export interface ProductOptions {
  readonly xboxProEliteBusanv3?: XboxProEliteBusanv3;
  readonly xboxProEliteExtonv3?: XboxProEliteExtonv3;
  readonly xboxProElitePixtonv3?: XboxProElitePixtonv3;
  readonly xboxProEliteTuxtonv3?: XboxProEliteTuxtonv3;
  readonly xboxProEliteCroxtonv3?: XboxProEliteCroxtonv3;
}

export interface XboxProEliteBusanv3 {
  readonly manifest?: string;
  readonly mobileManifest?: string;
  readonly translation?: number[];
  readonly rotation?: number[];
  readonly scale?: number[];
  readonly connections?: XboxProEliteBusanv3Connections;
}

export interface XboxProEliteBusanv3Connections {
  readonly animationDPad?: string;
  readonly animationPaddles?: string;
  readonly controllerLetteringText?: string;
  readonly interposerButtonsColorPreset?: string;
  readonly abxyButtonsColorPreset?: string;
  readonly abxyButtonsResinColorPreset?: string;
  readonly accessoriesThumbstickToppersColorPreset?: string;
  readonly accessoriesDPadColorPreset?: string;
  readonly bodyColorPreset?: string;
  readonly backLogoDecalsColorPreset?: string;
  readonly backColorPreset?: string;
  readonly bumpersColorPreset?: string;
  readonly caseCustomColorPreset?: string;
  readonly dPadColorPreset?: string;
  readonly dPadDecalsColorPreset?: string;
  readonly paddleColorPreset?: string;
  readonly thumbstickToppersColorPreset?: string;
  readonly thumbstickDomesColorPreset?: string;
  readonly thumbstickRingsColorPreset?: string;
  readonly triggersColorPreset?: string;
  readonly viewMenuShareButtonsColorPreset?: string;
  readonly accessoriesPack?: string;
  readonly patternTopcase?: string;
}

export interface XboxProEliteCroxtonv3 {
  readonly manifest?: string;
  readonly mobileManifest?: string;
  readonly translation?: number[];
  readonly rotation?: number[];
  readonly scale?: number[];
  readonly connections?: XboxProEliteCroxtonv3Connections;
}

export interface XboxProEliteCroxtonv3Connections {
  readonly caseCustomColorPreset?: string;
}

export interface XboxProEliteExtonv3 {
  readonly manifest?: string;
  readonly mobileManifest?: string;
  readonly translation?: number[];
  readonly rotation?: number[];
  readonly scale?: number[];
  readonly connections?: XboxProEliteExtonv3Connections;
}

export interface XboxProEliteExtonv3Connections {
  readonly accessoriesPack?: string;
  readonly caseCustomColorPreset?: string;
  readonly paddleColorPreset?: string;
  readonly accessoriesThumbstickToppersColorPreset?: string;
  readonly accessoriesDPadColorPreset?: string;
}

export interface XboxProElitePixtonv3 {
  readonly manifest?: string;
  readonly mobileManifest?: string;
  readonly translation?: number[];
  readonly rotation?: number[];
  readonly scale?: number[];
  readonly connections?: XboxProElitePixtonv3Connections;
}

export interface XboxProElitePixtonv3Connections {
  readonly paddleColorPreset?: string;
}

export interface XboxProEliteTuxtonv3 {
  readonly manifest?: string;
  readonly mobileManifest?: string;
  readonly translation?: number[];
  readonly rotation?: number[];
  readonly scale?: number[];
  readonly connections?: XboxProEliteTuxtonv3Connections;
}

export interface XboxProEliteTuxtonv3Connections {
  readonly accessoriesThumbstickToppersColorPreset?: string;
  readonly accessoriesDPadColorPreset?: string;
  readonly accessoriesPack?: string;
}
