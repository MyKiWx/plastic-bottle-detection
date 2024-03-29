"use client";

// app/layout.tsx
import { fonts } from "./fonts";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>
        <Providers>
          <Box bg="blackAlpha.50">
            <HStack w="full" h={"64px"} bg="#b2f2bb" border="2px solid black">
              <Text></Text>
            </HStack>
            <HStack
              w="full"
              justifyContent="flex-start"
              alignItems="flex-start"
              position="relative"
              gap={0}
            >
              <VStack
                minW={"200px"}
                sx={{
                  h: "calc(100dvh - 64px)",
                }}
                bg="#a5d8ff"
                borderLeft="2px solid black"
                borderRight="2px solid black"
                borderBottom="2px solid black"
                position="sticky"
              >
                <Text></Text>
              </VStack>
              <Box>{children}</Box>
            </HStack>
          </Box>
        </Providers>
      </body>
    </html>
  );
}

import {
  Accordion,
  AccordionProps,
  AccordionButton,
  AccordionButtonProps,
  useAccordionStyles,
  AccordionIcon,
  AccordionIconProps,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  AccordionPanelProps,
  AccordionProvider,
  UseAccordionItemProps,
  UseAccordionItemReturn,
  UseAccordionProps,
  UseAccordionReturn,
  useAccordion,
  useAccordionContext,
  useAccordionItem,
  useAccordionItemState,
} from "@chakra-ui/accordion";
import {
  Alert,
  AlertProps,
  AlertStatus,
  useAlertStyles,
  AlertDescription,
  AlertDescriptionProps,
  AlertIcon,
  AlertIconProps,
  AlertTitle,
  AlertTitleProps,
} from "@chakra-ui/alert";

import {
  Avatar,
  AvatarProps,
  AvatarBadge,
  AvatarBadgeProps,
  useAvatarStyles,
  AvatarGroup,
  AvatarGroupProps,
  GenericAvatarIcon,
} from "@chakra-ui/avatar";

import {
  Breadcrumb,
  BreadcrumbProps,
  useBreadcrumbStyles,
  BreadcrumbItem,
  BreadcrumbItemProps,
  BreadcrumbLink,
  BreadcrumbLinkProps,
  BreadcrumbSeparator,
  BreadcrumbSeparatorProps,
  BreadcrumbOptions,
} from "@chakra-ui/breadcrumb";
import {
  Button,
  ButtonProps,
  ButtonGroup,
  ButtonGroupProps,
  IconButton,
  IconButtonProps,
  ButtonSpinner,
  useButtonGroup,
  ButtonOptions,
} from "@chakra-ui/button";
import {
  Card,
  CardProps,
  CardBody,
  CardBodyProps,
  useCardStyles,
  CardFooter,
  CardFooterProps,
  CardHeader,
  CardHeaderProps,
} from "@chakra-ui/card";
import {
  Checkbox,
  CheckboxProps,
  CheckboxGroup,
  CheckboxGroupProps,
  CheckboxIcon,
  CheckboxIconProps,
  CheckboxGroupContext,
  CheckboxState,
  UseCheckboxGroupProps,
  UseCheckboxGroupReturn,
  UseCheckboxProps,
  useCheckboxGroup,
  UseCheckboxReturn,
  useCheckbox,
} from "@chakra-ui/checkbox";
import {
  FormControl,
  FormControlOptions,
  FormControlProps,
  FormHelperText,
  FormHelperTextProps,
  useFormControlContext,
  useFormControlStyles,
  UseFormControlProps,
  useFormControl,
  useFormControlProps,
  FormErrorIcon,
  FormErrorMessage,
  FormErrorMessageProps,
  useFormErrorStyles,
  FormLabel,
  FormLabelProps,
  RequiredIndicator,
  RequiredIndicatorProps,
} from "@chakra-ui/form-control";
import {
  UseAnimationStateProps,
  useAnimationState,
  useBoolean,
  useCallbackRef,
  UseClipboardOptions,
  useClipboard,
  useConst,
  UseControllableStateProps,
  useControllableProp,
  useControllableState,
  useDimensions,
  UseDisclosureProps,
  UseDisclosureReturn,
  useDisclosure,
  EventListenerEnv,
  useEventListener,
  useEventListenerMap,
  UseFocusEffectOptions,
  useFocusEffect,
  UseFocusOnHideOptions,
  useFocusOnHide,
  UseFocusOnMouseDownProps,
  useFocusOnPointerDown,
  UseFocusOnShowOptions,
  useFocusOnShow,
  useForceUpdate,
  useId,
  useIds,
  useOptionalPart,
  useInterval,
  useLatestRef,
  assignRef,
  useMergeRefs,
  useMouseDownRef,
  UseOutsideClickProps,
  useOutsideClick,
  UsePanGestureProps,
  usePanGesture,
  usePointerEvent,
  usePrevious,
  useSafeLayoutEffect,
  UseShortcutProps,
  useShortcut,
  useTimeout,
  useUnmountEffect,
  useUpdateEffect,
  useWhyDidYouUpdate,
} from "@chakra-ui/hooks";
import { Icon, IconProps, createIcon } from "@chakra-ui/icon";
import {
  Image,
  ImageProps,
  Img,
  ImgProps,
  UseImageProps,
  UseImageReturn,
  useImage,
} from "@chakra-ui/image";
import {
  Input,
  InputProps,
  InputAddon,
  InputAddonProps,
  InputLeftAddon,
  InputLeftAddonProps,
  InputRightAddon,
  InputRightAddonProps,
  InputGroup,
  InputGroupProps,
  useInputGroupStyles,
  InputElementProps,
  InputLeftElement,
  InputLeftElementProps,
  InputRightElement,
  InputRightElementProps,
} from "@chakra-ui/input";
import {
  AspectRatio,
  AspectRatioProps,
  Badge,
  BadgeProps,
  Box,
  BoxProps,
  Circle,
  Square,
  SquareProps,
  AbsoluteCenter,
  AbsoluteCenterProps,
  Center,
  CenterProps,
  Code,
  CodeProps,
  Container,
  ContainerProps,
  Divider,
  DividerProps,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  GridItem,
  GridItemProps,
  Heading,
  HeadingProps,
  Highlight,
  HighlightProps,
  Mark,
  MarkProps,
  UseHighlightProps,
  useHighlight,
  Kbd,
  KbdProps,
  List,
  ListIcon,
  ListItem,
  ListItemProps,
  ListProps,
  OrderedList,
  UnorderedList,
  useListStyles,
  SimpleGrid,
  SimpleGridProps,
  Spacer,
  SpacerProps,
  HStack,
  StackDivider,
  StackDividerProps,
  StackItem,
  Stack,
  StackProps,
  VStack,
  StackDirection,
  Text,
  TextProps,
  Wrap,
  WrapItem,
  WrapItemProps,
  WrapProps,
  Indicator,
  IndicatorProps,
} from "@chakra-ui/layout";
import {
  Hide,
  HideProps,
  UseQueryProps,
  useQuery,
  useColorModePreference,
  usePrefersReducedMotion,
  Show,
  ShowProps,
  UseBreakpointOptions,
  useBreakpoint,
  useBreakpointValue,
  UseMediaQueryOptions,
  useMediaQuery,
} from "@chakra-ui/media-query";
import {
  Menu,
  MenuProps,
  useMenuStyles,
  MenuButton,
  MenuButtonProps,
  MenuCommand,
  MenuCommandProps,
  MenuDivider,
  MenuDividerProps,
  MenuGroup,
  MenuGroupProps,
  MenuIcon,
  MenuItem,
  MenuItemProps,
  MenuItemOption,
  MenuItemOptionProps,
  MenuList,
  MenuListProps,
  MenuOptionGroup,
  MenuOptionGroupProps,
  MenuDescendantsProvider,
  MenuProvider,
  UseMenuButtonProps,
  UseMenuItemProps,
  UseMenuListProps,
  UseMenuOptionGroupProps,
  UseMenuOptionOptions,
  UseMenuOptionProps,
  UseMenuProps,
  UseMenuReturn,
  useMenu,
  useMenuButton,
  useMenuContext,
  useMenuDescendant,
  useMenuDescendants,
  useMenuDescendantsContext,
  useMenuItem,
  useMenuList,
  useMenuOption,
  useMenuOptionGroup,
  useMenuPositioner,
  useMenuState,
} from "@chakra-ui/menu";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogProps,
  Drawer,
  DrawerProps,
  useDrawerContext,
  DrawerContent,
  DrawerContentProps,
  Modal,
  ModalContextProvider,
  ModalProps,
  useModalContext,
  useModalStyles,
  ModalBody as AlertDialogBody,
  ModalBody as DrawerBody,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton as AlertDialogCloseButton,
  ModalCloseButton as DrawerCloseButton,
  ModalCloseButton,
  ModalCloseButtonProps,
  ModalContent,
  ModalContentProps,
  ModalFocusScope,
  ModalFooter as AlertDialogFooter,
  ModalFooter as DrawerFooter,
  ModalFooter,
  ModalFooterProps,
  ModalHeader as AlertDialogHeader,
  ModalHeader as DrawerHeader,
  ModalHeader,
  ModalHeaderProps,
  ModalOverlay as AlertDialogOverlay,
  ModalOverlay as DrawerOverlay,
  ModalOverlay,
  ModalOverlayProps,
  UseModalProps,
  UseModalReturn,
  useModal,
  useModalManager,
} from "@chakra-ui/modal";
import {
  NumberDecrementStepper,
  NumberDecrementStepperProps,
  NumberIncrementStepper,
  NumberIncrementStepperProps,
  NumberInput,
  NumberInputField,
  NumberInputFieldProps,
  NumberInputProps,
  NumberInputStepper,
  NumberInputStepperProps,
  useNumberInputStyles,
  UseNumberInputProps,
  UseNumberInputReturn,
  useNumberInput,
} from "@chakra-ui/number-input";
import {
  PinInput,
  PinInputField,
  PinInputFieldProps,
  PinInputProps,
  PinInputContext,
  PinInputDescendantsProvider,
  PinInputProvider,
  UsePinInputFieldProps,
  UsePinInputProps,
  UsePinInputReturn,
  usePinInput,
  usePinInputContext,
  usePinInputField,
} from "@chakra-ui/pin-input";
import {
  Popover,
  PopoverProps,
  UsePopoverProps,
  UsePopoverReturn,
  usePopover,
  PopoverAnchor,
  PopoverArrow,
  PopoverArrowProps,
  PopoverBody,
  PopoverBodyProps,
  PopoverCloseButton,
  PopoverCloseButtonProps,
  PopoverContent,
  PopoverContentProps,
  PopoverFooter,
  PopoverFooterProps,
  PopoverHeader,
  PopoverHeaderProps,
  PopoverTrigger,
  usePopoverContext,
  usePopoverStyles,
} from "@chakra-ui/popover";
import {
  PlacementWithLogical,
  UsePopperProps,
  UsePopperReturn,
  usePopper,
  popperCSSVars,
  Placement,
} from "@chakra-ui/popper";
import {
  PortalManager,
  PortalManagerProps,
  usePortalManager,
  Portal,
  PortalProps,
} from "@chakra-ui/portal";
import {
  CircularProgress,
  CircularProgressProps,
  Progress,
  ProgressFilledTrackProps,
  ProgressProps,
  ProgressTrackProps,
  useProgressStyles,
  ProgressLabel,
  ProgressLabelProps,
  CircularProgressLabel,
  CircularProgressLabelProps,
} from "@chakra-ui/progress";
import {
  Radio,
  RadioProps,
  UseRadioProps,
  UseRadioReturn,
  useRadio,
  UseRadioGroupProps,
  UseRadioGroupReturn,
  useRadioGroup,
  RadioGroup,
  RadioGroupContext,
  RadioGroupProps,
  useRadioGroupContext,
} from "@chakra-ui/radio";
import {
  Select,
  SelectProps,
  SelectField,
  SelectFieldProps,
} from "@chakra-ui/select";
import {
  Skeleton,
  SkeletonOptions,
  SkeletonProps,
  SkeletonText,
  SkeletonTextProps,
  SkeletonCircle,
} from "@chakra-ui/skeleton";
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderInnerTrackProps,
  RangeSliderMark,
  RangeSliderMarkProps,
  RangeSliderProps,
  RangeSliderProvider,
  RangeSliderThumb,
  RangeSliderThumbProps,
  RangeSliderTrack,
  RangeSliderTrackProps,
  useRangeSliderContext,
  useRangeSliderStyles,
  Slider,
  SliderFilledTrack,
  SliderInnerTrackProps,
  SliderMark,
  SliderMarkProps,
  SliderProps,
  SliderProvider,
  SliderThumb,
  SliderThumbProps,
  SliderTrack,
  SliderTrackProps,
  useSliderContext,
  useSliderStyles,
  UseRangeSliderProps,
  UseRangeSliderReturn,
  useRangeSlider,
  UseSliderProps,
  UseSliderReturn,
  useSlider,
} from "@chakra-ui/slider";
import { Spinner, SpinnerProps } from "@chakra-ui/spinner";
import {
  Stat,
  StatProps,
  useStatStyles,
  StatArrow,
  StatArrowProps,
  StatDownArrow,
  StatUpArrow,
  StatGroup,
  StatGroupProps,
  StatHelpText,
  StatHelpTextProps,
  StatLabel,
  StatLabelProps,
  StatNumber,
  StatNumberProps,
} from "@chakra-ui/stat";
import {
  Step,
  StepProps,
  StepStatusType,
  useStepContext,
  useStepperStyles,
  StepDescription,
  StepDescriptionProps,
  StepIcon,
  StepIndicator,
  StepIndicatorContent,
  StepIndicatorProps,
  StepNumber,
  StepSeparator,
  StepSeparatorProps,
  StepStatus,
  StepStatusProps,
  StepTitle,
  StepTitleProps,
  Stepper,
  StepperProps,
  UseStepsProps,
  UseStepsReturn,
  useSteps,
} from "@chakra-ui/stepper";
import { Switch, SwitchProps } from "@chakra-ui/switch";
import {
  Table,
  TableOptions,
  TableProps,
  useTableStyles,
  TableCaption,
  TableCaptionProps,
  TableContainer,
  TableContainerProps,
  TableBodyProps,
  Tbody,
  TableCellProps,
  Td,
  TableFooterProps,
  Tfoot,
  TableColumnHeaderProps,
  Th,
  TableHeadProps,
  Thead,
  TableRowProps,
  Tr,
} from "@chakra-ui/table";
import {
  Tab,
  TabProps,
  TabIndicator,
  TabIndicatorProps,
  TabList,
  TabListProps,
  TabPanel,
  TabPanelProps,
  TabPanels,
  TabPanelsProps,
  Tabs,
  TabsProps,
  useTabsStyles,
  TabsDescendantsProvider,
  TabsProvider,
  UseTabListProps,
  UseTabListReturn,
  UseTabOptions,
  UseTabPanelsProps,
  UseTabProps,
  UseTabsProps,
  UseTabsReturn,
  useTab,
  useTabIndicator,
  useTabList,
  useTabPanel,
  useTabPanels,
  useTabs,
  useTabsContext,
  useTabsDescendant,
  useTabsDescendants,
  useTabsDescendantsContext,
} from "@chakra-ui/tabs";
import {
  Tag,
  TagCloseButton,
  TagCloseButtonProps,
  TagLabel,
  TagLabelProps,
  TagLeftIcon,
  TagProps,
  TagRightIcon,
  useTagStyles,
} from "@chakra-ui/tag";
import { Textarea, TextareaProps } from "@chakra-ui/textarea";
import {
  CreateToastFnReturn,
  Toast,
  ToastId,
  ToastMessage,
  ToastOptions,
  ToastProps,
  ToastState,
  UseToastOptions,
  createRenderToast,
  createToastFn,
  useToast,
  CreateToastOptions,
  ToastMethods,
  ToastOptionProvider,
  ToastProvider,
  ToastProviderProps,
  LogicalToastPosition,
  ToastPosition,
  ToastPositionWithLogical,
  getToastPlacement,
  CreateStandAloneToastParam,
  CreateStandaloneToastReturn,
  createStandaloneToast,
} from "@chakra-ui/toast";
import {
  Tooltip,
  TooltipProps,
  UseTooltipProps,
  UseTooltipReturn,
  useTooltip,
} from "@chakra-ui/tooltip";
import {
  Collapse,
  CollapseOptions,
  CollapseProps,
  ICollapse,
  Fade,
  FadeProps,
  fadeConfig,
  ScaleFade,
  ScaleFadeProps,
  scaleFadeConfig,
  Slide,
  SlideOptions,
  SlideProps,
  SlideFade,
  SlideFadeProps,
  slideFadeConfig,
  EASINGS,
  SlideDirection,
  TransitionProperties,
  getSlideTransition,
  withDelay,
} from "@chakra-ui/transition";

import {
  useState,
  useReducer,
  useRef,
  useLayoutEffect,
  useEffect,
  useImperativeHandle,
  useCallback,
  useMemo,
  useDebugValue,
  useDeferredValue,
  useTransition,
  useInsertionEffect,
  useSyncExternalStore,
} from "react";

import {
  useSearchParams,
  usePathname,
  useRouter,
  useParams,
  useSelectedLayoutSegments,
  useSelectedLayoutSegment,
  redirect,
  notFound,
} from "next/navigation";

import Link from "next/link";
