/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * CommonMethod.
 *
 * @crossplatform
 * @since 12
 */
export declare class CommonMethod<T> {
  /**
   * constructor.
   *
   * @crossplatform
   * @since 12
   */
  constructor();

  /**
   * Sets the width of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  width(value: Length): T;

  /**
   * Sets the height of the current component.
   *
   * @param { Length } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  height(value: Length): T;

  /**
   * The size of the current component.
   *
   * @param { SizeOptions } value
   * @returns { T }

   * @crossplatform
   * @since 12
   */
  size(value: SizeOptions): T;

  /**
   * constraint Size:
   * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
   *
   * @param { ConstraintSizeOptions } value
   * @returns { T }

   * @crossplatform
   * @since 12
   */
  constraintSize(value: ConstraintSizeOptions): T;

  /**
   * layout Weight
   *
   * @param { number | string } value
   * @returns { T }

   * @crossplatform
   * @since 12
   */
  layoutWeight(value: number | string): T;

  /**
   * Inner margin.
   *
   * @param { Padding | Length | LocalizedPadding } value
   * @returns { T }
   *
   * @crossplatform
   * @since 12
   */
  padding(value: Padding | Length | LocalizedPadding): T;

  /**
   * Outer Margin.
   *
   * @param { Margin | Length | LocalizedMargin } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  margin(value: Margin | Length | LocalizedMargin): T;


  /**
   * Background.
   *
   * @param { CustomBuilder } builder
   * @param { object } options
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  background(builder: CustomBuilder, options?: { align?: Alignment }): T;

  /**
   * Background color
   *
   * @param { ResourceColor } value
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  backgroundColor(value: ResourceColor): T;

  /**
   * Background image
   * src: Image address url
   *
   * @param { ResourceStr | PixelMap } src
   * @param { ImageRepeat } repeat
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  backgroundImage(src: ResourceStr | PixelMap, repeat?: ImageRepeat): T;

  /**
   * Background image size
   *
   * @param { SizeOptions | ImageSize } value
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  backgroundImageSize(value: SizeOptions | ImageSize): T;

  /**
   * Background image position
   * x:Horizontal coordinate;y:Vertical axis coordinate.
   *
   * @param { Position | Alignment } value
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  backgroundImagePosition(value: Position | Alignment): T;

  /**
   * options:background effect options.
   *
   * @param { BackgroundEffectOptions } options - options indicates the effect options.
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  backgroundEffect(options: BackgroundEffectOptions): T;

  /**
   * Background image resizable.
   * value:resizable options
   *
   * @param { ResizableOptions } value - Indicates the resizable options.
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  backgroundImageResizable(value: ResizableOptions): T;

  /**
   * Foreground effect.
   *
   * @param { ForegroundEffectOptions } options - options indicates the effect options.
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  foregroundEffect(options: ForegroundEffectOptions): T;

  /**
   * Opacity
   * width:Border width;color:Border color;radius:Border radius;
   *
   * @param { BorderOptions } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  border(value: BorderOptions): T;

  /**
   * Border style
   *
   * @param { BorderStyle | EdgeStyles } value
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  borderStyle(value: BorderStyle | EdgeStyles): T;

  /**
   * Border width
   *
   * @param { Length | EdgeWidths | LocalizedEdgeWidths } value
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): T;

  /**
   * Border color
   *
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;

  /**
   * Border radius
   *
   * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): T;

  /**
   * Border image
   *
   * @param { BorderImageOption } value
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  borderImage(value: BorderImageOption): T;

  /**
   * Outline
   * width:Outline width;color:Outline color;radius:Outline radius;style:Outline style;
   *
   * @param { OutlineOptions } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  outline(value: OutlineOptions): T;

  /**
   * Outline style
   *
   * @param { OutlineStyle | EdgeOutlineStyles } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  outlineStyle(value: OutlineStyle | EdgeOutlineStyles): T;

  /**
   * Outline width
   *
   * @param { Dimension | EdgeOutlineWidths } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  outlineWidth(value: Dimension | EdgeOutlineWidths): T;

  /**
   * Outline color
   *
   * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;

  /**
   * Outline radius
   *
   * @param { Dimension | OutlineRadiuses } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  outlineRadius(value: Dimension | OutlineRadiuses): T;

  /**
   * Keyboard input
   *
   * @param { function } event
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  onKeyEvent(event: (event: KeyEvent) => void): T;

  /**
   * Set focusable.
   *
   * @param { boolean } value
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  focusable(value: boolean): T;

  /**
   * Trigger a event when got focus.
   *
   * @param { function } event
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  onFocus(event: () => void): T;

  /**
   * Trigger a event when lose focus.
   *
   * @param { function } event
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  onBlur(event: () => void): T;

  /**
   * Set focus index by key tab.
   *
   * @param { number } index
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  tabIndex(index: number): T;

  /**
   * Set default focused component when a page create.
   *
   * @param { boolean } value
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  defaultFocus(value: boolean): T;

  /**
   * Set default focused component when focus on a focus group.
   *
   * @param { boolean } value
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  groupDefaultFocus(value: boolean): T;

  /**
   * Set a component focused when the component be touched.
   *
   * @param { boolean } value
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  focusOnTouch(value: boolean): T;

  /**
   * animation
   *
   * @param { AnimateParam } value
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  animation(value: AnimateParam): T;

  /**
   * Transition parameter
   *
   * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  transition(value: TransitionOptions | TransitionEffect): T;

  /**
   * Set the transition effect of component when it appears and disappears.
   *
   * @param { TransitionEffect } effect - transition effect
   * @param { Optional<TransitionFinishCallback> } onFinish - transition finish callback.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): T;

  /**
   * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
   * The larger the blurring radius, the more blurring the content.
   * If the value is 0, the content blurring effect is not blurring.
   *
   * @param { number } value - value indicates radius of backdrop blur.
   * @param { BlurOptions } [options] - options indicates blur options.
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  blur(value: number, options?: BlurOptions): T;

  /**
   * Component motion blur interface.
   *
   * @param { MotionBlurOptions } value - the attributes of motion blur.
   * @returns { T }
   * @crossplatform
   *
   * @since 12
   */
  motionBlur(value: MotionBlurOptions): T;

  /**
   * Adds a highlight effect to the current component.
   * The input parameter is the highlight proportion. 0 indicates no highlight effect, and 1 indicates the maximum highlight proportion.
   * The component is displayed as all white (percentage).
   *
   * @param { number } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  brightness(value: number): T;

  /**
   * Adds a contrast effect to the current component. The input parameter is the contrast value.
   * A larger contrast value indicates a sharper image. When the contrast value is 0, the image becomes gray. (%)
   *
   * @param { number } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  contrast(value: number): T;

  /**
   * Adds a grayscale effect to the current component.
   * The value is the gray scale conversion ratio. If the input parameter is 1.0, the gray scale image is completely converted to the gray scale image. If the input parameter is 0.0, the image does not change.
   * If the input parameter is between 0.0 and 1.0, the effect changes. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @crossplatform

   * @since 12
   */
  grayscale(value: number): T;

  /**
   * Adds a color overlay effect for the current component. The input parameter is the superimposed color.
   *
   * @param { Color | string | Resource } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  colorBlend(value: Color | string | Resource): T;

  /**
   * Adds a saturation effect to the current component.
   * The saturation is the ratio of the color-containing component to the achromatic component (gray).
   * The larger the color-containing component, the greater the saturation.
   * The larger the achromatic component, the smaller the saturation. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  saturate(value: number): T;

  /**
   * Converts the image to sepia. Value defines the scale of the conversion.
   * A value of 1 is completely sepia, and a value of 0 does not change the image. (Percentage)
   *
   * @param { number } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  sepia(value: number): T;

  /**
   * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
   * A value of 0% does not change the image. (Percentage)
   *
   * @param { number | InvertOptions } value - value indicates the scale of the conversion or the options of invert.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  invert(value: number | InvertOptions): T;

  /**
   * Adds the hue rotation effect to the current component.
   * The input parameter is the rotation angle. When the input parameter is 0deg, the image does not change (the default value is 0deg), and the input parameter does not have a maximum value.
   * If the value exceeds 360deg, the image is circled again.
   *
   * @param { number | string } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  hueRotate(value: number | string): T;

  /**
   * Add an attribute to control whether the shadows of the child nodes overlap each other.
   *
   * @param { boolean } value - true means the shadows of the child nodes overlap each other effect and drawn in batches.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  useShadowBatching(value: boolean): T;

  /**
   * Set component scaling.
   *
   * @param { ScaleOptions } value default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  scale(value: ScaleOptions): T;

  /**
   * Set component rotation.
   *
   * @param { RotateOptions } value default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  rotate(value: RotateOptions): T;

  /**
   * Sets the transformation matrix for the current component.
   *
   * @param { object } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  transform(value: object): T;

  /**
   * This callback is triggered when a component mounts a display.
   *
   * @param { function } event
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  onAppear(event: () => void): T;

  /**
   * This callback is triggered when component uninstallation disappears.
   *
   * @param { function } event
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  onDisAppear(event: () => void): T;

  /**
   * Controls the display or hide of the current component.
   *
   * @param { Visibility } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  visibility(value: Visibility): T;

  /**
   * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
   *
   * @param { number } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  flexShrink(value: number): T;

  /**
   * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
   *
   * @param { number | string } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  flexBasis(value: number | string): T;

  /**
   * Overrides the default configuration of alignItems in the Flex Layout container.
   *
   * @param { ItemAlign } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  alignSelf(value: ItemAlign): T;

  /**
   * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
   *
   * @param { number } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  displayPriority(value: number): T;

  /**
   * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
   *
   * @param { number } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  zIndex(value: number): T;

  /**
   * If the components of the two pages are configured with the same ID, the shared element transition is performed during transition. If the parameter is set to an empty string, the shared element transition does not occur. For details about the options parameter, see the options parameter description.
   *
   * @param { string } id
   * @param { sharedTransitionOptions } options
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  sharedTransition(id: string, options?: sharedTransitionOptions): T;

  /**
   * position
   *
   * @param { Position | Edges | LocalizedEdges } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  position(value: Position | Edges | LocalizedEdges): T;

  /**
   * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
   *
   * @param { Position | LocalizedPosition} value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  markAnchor(value: Position | LocalizedPosition): T;

  /**
   * Coordinate offset relative to the layout completion position.
   * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
   *
   * @param { Position | Edges | LocalizedEdges } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  offset(value: Position | Edges | LocalizedEdges): T;

  /**
   * If the value is true, the component is available and can respond to operations such as clicking.
   *  If it is set to false, click operations are not responded.
   *
   * @param { boolean } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  enabled(value: boolean): T;

  /**
   * Specifies the alignRules of relative container
   *
   * @param { AlignRuleOption } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  alignRules(value: AlignRuleOption): T;

  /**
   * Specifies the localized alignRules of relative container
   *
   * @param { LocalizedAlignRuleOptions } alignRule
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  alignRules(alignRule: LocalizedAlignRuleOptions): T;

  /**
   * Specifies the direction and style of chain in relative container
   *
   * @param { Axis } direction - indicates direction of the chain
   * @param { ChainStyle } style - indicates style of the chain
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  chainMode(direction: Axis, style: ChainStyle): T;

  /**
   * Specifies the aspect ratio of the current component.
   *
   * @param { number } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  aspectRatio(value: number): T;

  /**
   * Add mask text to the current component. The layout is the same as that of the current component.
   *
   * @param { string | CustomBuilder | ComponentContent } value
   * @param { OverlayOptions } options
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  overlay(value: string | CustomBuilder | ComponentContent, options?: OverlayOptions): T;

  /**
   * Linear Gradient
   * angle: Angle of Linear Gradient. The default value is 180;
   * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
   * colors: Color description for gradients.
   * repeating: repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  linearGradient(value: {
    angle?: number | string;
    direction?: GradientDirection;
    colors: Array<[ResourceColor, number]>;
    repeating?: boolean;
  }): T;

  /**
   * Angle Gradient
   * center:is the center point of the angle gradient
   * start:Start point of angle gradient. The default value is 0
   * end:End point of angle gradient. The default value is 0
   * number:number
   * rotating:rotating. The default value is 0
   * colors:Color description for gradients
   * repeating:repeating. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  sweepGradient(value: {
    center: [Length, Length];
    start?: number | string;
    end?: number | string;
    rotation?: number | string;
    colors: Array<[ResourceColor, number]>;
    repeating?: boolean;
  }): T;

  /**
   * Radial Gradient
   * center:Center point of radial gradient
   * radius:Radius of Radial Gradient. value range [0, +∞)
   * colors:Color description for gradients
   * repeating: Refill. The default value is false
   *
   * @param { object } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  radialGradient(value: {
    center: [Length, Length];
    radius: number | string;
    colors: Array<[ResourceColor, number]>;
    repeating?: boolean;
  }): T;

  /**
   * Set the motion path of the component
   * path:Motion path for displacement animation, using the svg path string.
   * from:Start point of the motion path. The default value is 0.0.
   * to:End point of the motion path. The default value is 1.0.
   * rotatable:Whether to follow the path for rotation.
   *
   * @param { MotionPathOptions } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  motionPath(value: MotionPathOptions): T;

  /**
   * Add a shadow effect to the current component
   *
   * @param { ShadowOptions | ShadowStyle } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  shadow(value: ShadowOptions | ShadowStyle): T;

  /**
   * Add a blendMode effect to the current component
   *
   * @param { BlendMode } value - Different hybrid modes
   * @param { BlendApplyType } [type] - Different blend apply type
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  blendMode(value: BlendMode, type?: BlendApplyType): T;

  /**
   * The parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  clip(value: boolean): T;

  /**
   * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
   * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
   *
   * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T;

  /**
   * Sets the mask of the current component.
   *
   * @param { ProgressMask } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  mask(value: ProgressMask): T;

  /**
   * Applies a mask of the specified shape to the current assembly.
   *
   * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T;

  /**
   * Id. User can set an id to the component to identify it.
   *
   * @param { string } value
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  id(value: string): T;

  /**
   * Popup control
   *
   * @param { boolean } show
   * @param { PopupOptions | CustomPopupOptions } popup
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): T;

  /**
   * Menu control
   *
   * @param { boolean } isShow true means display menu, false means hide menu.
   * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
   * @param { MenuOptions } options - Indicates the options of menu.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T;

  /**
   * Bind content cover
   *
   * @param { Optional<boolean> } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ModalTransition } [type] - transition type.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  bindContentCover(isShow: Optional<boolean>, builder: CustomBuilder, type?: ModalTransition): T;

  /**
   * Bind content cover
   *
   * @param { Optional<boolean> } isShow - true means display content, false means hide content.
   * @param { CustomBuilder } builder - the content to be displayed.
   * @param { ContentCoverOptions } [options] - options of content cover.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  bindContentCover(isShow: Optional<boolean>, builder: CustomBuilder, options?: ContentCoverOptions): T;

  /**
   * Bind sheet
   *
   * @param { Optional<boolean> } isShow - true means display sheet, false means hide sheet.
   * @param { CustomBuilder } builder - the sheet to be displayed.
   * @param { SheetOptions } [options] - options of sheet.
   * @returns { T } - template type
   * @crossplatform
   * @since 12
   */
  bindSheet(isShow: Optional<boolean>, builder: CustomBuilder, options?: SheetOptions): T;

  /**
   * Trigger a visible area change event.
   *
   * @param { Array<number> } ratios
   * @param { function } event
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  onVisibleAreaChange(ratios: Array<number>, event: (isVisible: boolean, currentRatio: number) => void): T;

  /**
   * Set the light up effect of the component
   *
   * @param { number } value - set the degree to which the component lights up, value range [0, 1].
   * The color brightness in the component rendering content area is greater than the value and can be displayed, otherwise it will not be displayed.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  lightUpEffect(value: number): T;

  /**
   * Set the edge pixel stretch effect of the Component.
   *
   * @param { PixelStretchEffectOptions } options
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  pixelStretchEffect(options: PixelStretchEffectOptions): T;

  /**
   * Reuse id is used for identify the reuse type for each custom node.
   *
   * @param { string } id - The id for reusable custom node.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  reuseId(id: string): T;

  /**
   * This callback is triggered when the size of this component change finished.
   *
   * @param { SizeChangeCallback } event - event callback.
   * @returns { T }
   * @crossplatform
   * @since 12
   */
  onSizeChange(event: SizeChangeCallback): T;
}
  