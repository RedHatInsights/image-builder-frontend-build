"use strict";(self.webpackChunkimageBuilder=self.webpackChunkimageBuilder||[]).push([[724],{56787:(e,n,t)=>{t.d(n,{L:()=>d});var i=t(70655),s=t(93264),o=t(73699),l=t(99355),r=t(17352),a=t(62472);const d=e=>{var{onSelect:n,ref:t,ouiaId:p,ouiaSafe:c,alignments:m,contextProps:u,menuAppendTo:h="inline",isFlipEnabled:f=!0,removeFindDomNode:g=!1,zIndex:C=9999}=e,b=(0,i.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]);return s.createElement(l.Dl.Provider,{value:Object.assign({onSelect:e=>n&&n(e),toggleTextClass:o.Z.dropdownToggleText,toggleIconClass:o.Z.dropdownToggleImage,toggleIndicatorClass:o.Z.dropdownToggleIcon,menuClass:o.Z.dropdownMenu,itemClass:o.Z.dropdownMenuItem,toggleClass:o.Z.dropdownToggle,baseClass:o.Z.dropdown,baseComponent:"div",sectionClass:o.Z.dropdownGroup,sectionTitleClass:o.Z.dropdownGroupTitle,sectionComponent:"section",disabledClass:o.Z.modifiers.disabled,plainTextClass:o.Z.modifiers.text,ouiaId:(0,a.Z1)(d.displayName,p),ouiaSafe:c,ouiaComponentType:d.displayName,alignments:m},u)},s.createElement(r.R,Object.assign({menuAppendTo:h,isFlipEnabled:f,removeFindDomNode:g,zIndex:C},b)))};d.displayName="Dropdown"},84457:(e,n,t)=>{t.d(n,{h:()=>a});var i=t(70655),s=t(93264),o=t(33676),l=t(99355),r=t(62472);const a=e=>{var{children:n,className:t,component:d="a",isDisabled:p=!1,isAriaDisabled:c=!1,isPlainText:m=!1,href:u,tooltip:h,tooltipProps:f={},listItemClassName:g,onClick:C,ref:b,additionalChild:y,customChild:v,tabIndex:E=-1,icon:x=null,autoFocus:T,description:R=null,styleChildren:w,ouiaId:D,ouiaSafe:N}=e,Z=(0,i.__rest)(e,["children","className","component","isDisabled","isAriaDisabled","isPlainText","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const O=(0,r.S$)(a.displayName,D,N);return s.createElement(l.e4.Consumer,null,(e=>s.createElement(o.n,Object.assign({context:e,role:"menuitem",tabIndex:E,className:t,component:d,isDisabled:p,isAriaDisabled:c,isPlainText:m,href:u,tooltip:h,tooltipProps:f,listItemClassName:g,onClick:C,additionalChild:y,customChild:v,icon:x,autoFocus:T,styleChildren:w,description:R},O,Z),n)))};a.displayName="DropdownItem"},94868:(e,n,t)=>{t.d(n,{h:()=>p});var i=t(70655),s=t(93264),o=t(3644),l=t(73699),r=t(38296),a=t(80164),d=t(99355);class p extends s.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const n=this.refsCollection;if("ArrowDown"===e.key){const t=n.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(t),e.stopPropagation()}else if("ArrowUp"===e.key){const t=n.length,i=n.slice(t-1,t),s=i&&i[0];p.focusFirstRef(s),e.stopPropagation()}},this.childKeyHandler=(e,n,t,i=!1)=>{(0,a.qG)(e,n,t,this.refsCollection,this.props.isGrouped?this.refsCollection:s.Children.toArray(this.props.children),i)},this.sendRef=(e,n,t,i)=>{this.refsCollection[e]=[],n.map(((n,t)=>{n?n.getAttribute?this.refsCollection[e][t]=i?null:n:this.refsCollection[e][t]=o.findDOMNode(n):this.refsCollection[e][t]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),n=e&&e[0];n&&n.focus&&setTimeout((()=>n.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:n}=this.props;if(n){let n=0;return s.Children.map(e,(e=>{const t=e,i={};return t.props&&t.props.children&&(Array.isArray(t.props.children)?i.children=s.Children.map(t.props.children,(e=>s.cloneElement(e,{index:n++}))):i.children=s.cloneElement(t.props.children,{index:n++})),s.cloneElement(t,i)}))}return s.Children.map(e,((e,n)=>s.cloneElement(e,{index:n})))}render(){const e=this.props,{className:n,isOpen:t,position:o,children:p,component:c,isGrouped:m,setMenuComponentRef:u,openedOnEnter:h,alignments:f}=e,g=(0,i.__rest)(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter","alignments"]);return s.createElement(d.e4.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===c?s.createElement(d.Dl.Consumer,null,(({onSelect:e,menuClass:i})=>s.createElement("div",{className:(0,r.i)(i,o===d.ir.right&&l.Z.modifiers.alignRight,(0,a.wt)(f,l.Z,"align-"),n),hidden:!t,onClick:n=>e&&e(n),ref:u},p))):m&&s.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:i})=>{const p=i||"div";return s.createElement(p,Object.assign({},g,{className:(0,r.i)(e,o===d.ir.right&&l.Z.modifiers.alignRight,(0,a.wt)(f,l.Z,"align-"),n),hidden:!t,role:"menu",ref:u}),this.extendChildren())}))||s.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:i})=>{const p=i||c;return s.createElement(p,Object.assign({},g,{className:(0,r.i)(e,o===d.ir.right&&l.Z.modifiers.alignRight,(0,a.wt)(f,l.Z,"align-"),n),hidden:!t,role:"menu",ref:u}),this.extendChildren())})))}}p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.ir.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[l.Z.dropdownToggle,l.Z.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.Dl},17352:(e,n,t)=>{t.d(n,{R:()=>c});var i=t(70655),s=t(93264),o=t(73699),l=t(38296),r=t(94868),a=t(99355),d=t(62472),p=t(16438);class c extends s.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=s.createRef(),this.menuComponentRef=s.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:n,className:t,direction:m,dropdownItems:u,isOpen:h,isPlain:f,isText:g,isGrouped:C,isFullHeight:b,onSelect:y,position:v,toggle:E,autoFocus:x,menuAppendTo:T,isFlipEnabled:R,removeFindDomNode:w,zIndex:D}=e,N=(0,i.__rest)(e,["children","className","direction","dropdownItems","isOpen","isPlain","isText","isGrouped","isFullHeight","onSelect","position","toggle","autoFocus","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]),Z=E.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let O,I,P=!1;u&&u.length>0?(O="ul",I=u,P=!0):(O="div",I=s.Children.toArray(n));const k=this.openedOnEnter,F=R&&"inline"!==T;return s.createElement(a.Dl.Consumer,null,(({baseClass:e,baseComponent:n,id:i,ouiaId:c,ouiaComponentType:u,ouiaSafe:y,alignments:R})=>{const S=n,A=s.createElement(r.h,{className:(0,l.i)(F&&o.Z.modifiers.static),setMenuComponentRef:this.setMenuComponentRef,component:O,isOpen:h,position:v,"aria-labelledby":i?`${i}-toggle`:Z,isGrouped:C,autoFocus:k&&x,alignments:R},I),M=s.createElement("div",{className:(0,l.i)(e,m===a.dw.up&&o.Z.modifiers.top,v===a.ir.right&&o.Z.modifiers.alignRight,h&&o.Z.modifiers.expanded,t)},h&&A),_=s.createElement(S,Object.assign({},N,{className:(0,l.i)(e,m===a.dw.up&&o.Z.modifiers.top,v===a.ir.right&&o.Z.modifiers.alignRight,h&&o.Z.modifiers.expanded,b&&o.Z.modifiers.fullHeight,t),ref:this.baseComponentRef},(0,d.dp)(u,c,y)),s.Children.map(E,(e=>s.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:h,id:Z,isPlain:f,isText:g,"aria-haspopup":P,onEnter:()=>{this.onEnter(),e.props.onEnter&&e.props.onEnter()}}))),"inline"===T&&h&&A);return"inline"===T?_:s.createElement(p.r,{trigger:_,popper:M,direction:m,position:v,appendTo:"parent"===T?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():T,isVisible:h,removeFindDomNode:w,zIndex:D,popperMatchesTriggerWidth:!1})}))}}c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isText:!1,isGrouped:!1,position:a.ir.left,direction:a.dw.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline",isFlipEnabled:!0}},80737:(e,n,t)=>{t.d(n,{a:()=>r});var i=t(70655),s=t(93264);const o=(0,t(40400).IU)({name:"EllipsisVIcon",height:512,width:192,svgPath:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",yOffset:0,xOffset:0});var l=t(1024);const r=e=>{var{id:n="",children:t=null,className:r="",isOpen:a=!1,"aria-label":d="Actions",parentRef:p=null,getMenuRef:c=null,isActive:m=!1,isPlain:u=!1,isDisabled:h=!1,bubbleEvent:f=!1,onToggle:g=(()=>{}),ref:C}=e,b=(0,i.__rest)(e,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return s.createElement(l.Z,Object.assign({id:n,className:r,isOpen:a,"aria-label":d,parentRef:p,getMenuRef:c,isActive:m,isPlain:u,isDisabled:h,onToggle:g,bubbleEvent:f},b),s.createElement(o,null))};r.displayName="KebabToggle"},1024:(e,n,t)=>{t.d(n,{Z:()=>p});var i=t(70655),s=t(93264),o=t(73699),l=t(99355),r=t(38296),a=t(1774);const d={default:"",primary:o.Z.modifiers.primary,secondary:o.Z.modifiers.secondary};class p extends s.Component{constructor(){super(...arguments),this.buttonRef=s.createRef(),this.componentDidMount=()=>{document.addEventListener("click",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress)},this.componentWillUnmount=()=>{document.removeEventListener("click",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress)},this.onDocClick=e=>{const{isOpen:n,parentRef:t,onToggle:i,getMenuRef:s}=this.props,o=s&&s(),l=t&&t.current&&t.current.contains(e.target),r=o&&o.contains&&o.contains(e.target);!n||l||r||null==i||i(!1,e)},this.onEscPress=e=>{var n,t,i;const{parentRef:s,getMenuRef:o}=this.props,l=o&&o(),r=s&&s.current&&s.current.contains(e.target),d=l&&l.contains&&l.contains(e.target);!this.props.isOpen||e.key!==a.yu.Escape&&"Tab"!==e.key||!r&&!d||(null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!1,e),null===(i=this.buttonRef.current)||void 0===i||i.focus())},this.onKeyDown=e=>{var n,t,i,s,o,l;("Tab"!==e.key||this.props.isOpen)&&("Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key||this.props.isOpen||(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(s=(i=this.props).onToggle)||void 0===s||s.call(i,!this.props.isOpen,e),null===(l=(o=this.props).onEnter)||void 0===l||l.call(o)):(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!this.props.isOpen,e)))}}render(){const e=this.props,{className:n,children:t,isOpen:a,isDisabled:p,isPlain:c,isText:m,isPrimary:u,isSplitButton:h,toggleVariant:f,onToggle:g,"aria-haspopup":C,isActive:b,bubbleEvent:y,onEnter:v,parentRef:E,getMenuRef:x,id:T,type:R}=e,w=(0,i.__rest)(e,["className","children","isOpen","isDisabled","isPlain","isText","isPrimary","isSplitButton","toggleVariant","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return s.createElement(l.Dl.Consumer,null,(({toggleClass:e})=>s.createElement("button",Object.assign({},w,{id:T,ref:this.buttonRef,className:(0,r.i)(h?o.Z.dropdownToggleButton:e||o.Z.dropdownToggle,b&&o.Z.modifiers.active,c&&o.Z.modifiers.plain,m&&o.Z.modifiers.text,u&&o.Z.modifiers.primary,f&&d[f],n),type:R||"button",onClick:e=>null==g?void 0:g(!a,e),"aria-expanded":a,"aria-haspopup":C,onKeyDown:e=>this.onKeyDown(e),disabled:p}),t)))}}p.displayName="Toggle",p.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isText:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},9947:(e,n,t)=>{t.d(n,{I:()=>i,u:()=>a});var i,s=t(70655),o=t(93264),l=t(38296),r=t(51203);!function(e){e.xs="xs",e.small="small",e.large="large",e.xl="xl",e.full="full"}(i||(i={}));const a=e=>{var{children:n,className:t="",variant:a=i.full,isFullHeight:d}=e,p=(0,s.__rest)(e,["children","className","variant","isFullHeight"]);return o.createElement("div",Object.assign({className:(0,l.i)(r.Z.emptyState,"xs"===a&&r.Z.modifiers.xs,"small"===a&&r.Z.modifiers.sm,"large"===a&&r.Z.modifiers.lg,"xl"===a&&r.Z.modifiers.xl,d&&r.Z.modifiers.fullHeight,t)},p),o.createElement("div",{className:(0,l.i)(r.Z.emptyStateContent)},n))};a.displayName="EmptyState"},51203:(e,n,t)=>{t.d(n,{Z:()=>i}),t(81320);const i={button:"pf-c-button",emptyState:"pf-c-empty-state",emptyStateBody:"pf-c-empty-state__body",emptyStateContent:"pf-c-empty-state__content",emptyStateIcon:"pf-c-empty-state__icon",emptyStatePrimary:"pf-c-empty-state__primary",emptyStateSecondary:"pf-c-empty-state__secondary",modifiers:{xs:"pf-m-xs",sm:"pf-m-sm",lg:"pf-m-lg",xl:"pf-m-xl",fullHeight:"pf-m-full-height",primary:"pf-m-primary",overpassFont:"pf-m-overpass-font"},title:"pf-c-title"}}}]);
//# sourceMappingURL=../sourcemaps/724.985b4dbb68343879512e264c27cfef97.js.map