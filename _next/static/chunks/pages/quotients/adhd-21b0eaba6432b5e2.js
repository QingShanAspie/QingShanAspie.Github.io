(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{411:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/quotients/adhd",function(){return t(4633)}])},4633:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>m});var r=t(8017),l=t(4109),i=t(7132),a=t(9292),n=t(9061);t(4475);let o=e=>{let{icon:s,iconBg:t="bg-rose-100",content:l}=e;return(0,r.jsx)("div",{className:"bg-gray-50 border border-gray-100 rounded-lg p-4 mt-3",children:(0,r.jsxs)("div",{className:"inline-flex items-center justify-center",children:[(0,r.jsx)("span",{className:"flex-shrink-0 w-8 h-8 ".concat(t," rounded-full flex items-center justify-center"),children:s}),(0,r.jsx)("span",{className:"ml-3 text-left",children:l})]})})},c=e=>{let{showModal:s,onClose:t,content:l}=e;return s?(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-black/60"}),(0,r.jsxs)("div",{className:"bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10",children:[(0,r.jsx)("div",{className:"flex justify-between items-center mb-4",children:(0,r.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:"重要信息"})}),(0,r.jsx)("div",{className:"space-y-4",children:l}),(0,r.jsx)("div",{className:"mt-6 flex justify-center",children:(0,r.jsx)("button",{onClick:t,className:"px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200",children:"确定"})})]})]}):null},d=JSON.parse('{"Q":[{"id":1,"text":"当必须完成一件枯燥或者困难的计划任务时，你会粗心犯错:","scoresAagree":[4,3,2,1,0]},{"id":2,"text":"当正在做枯燥或重复性的工作时，你会走神想其他的事情:","scoresAagree":[4,3,2,1,0]},{"id":3,"text":"有人面对你说话时，你很难专心地听完他说的内容:","scoresAagree":[4,3,2,1,0]},{"id":4,"text":"一旦完成任何计划中最具挑战的部分之后，你觉得完成最后的细节是有困难的:","scoresAagree":[4,3,2,1,0]},{"id":5,"text":"当必须从事需要有组织规划性的任务时，你觉得井然有序地完成是有困难的:","scoresAagree":[4,3,2,1,0]},{"id":6,"text":"当有一件需要复杂思考的工作时，你经常逃避或是延后开始:","scoresAagree":[4,3,2,1,0]},{"id":7,"text":"在家里或是在工作时，你经常乱放东西或是找不到东西:","scoresAagree":[4,3,2,1,0]},{"id":8,"text":"你经常因身旁的活动或声音而分心:","scoresAagree":[4,3,2,1,0]},{"id":9,"text":"你认为记住约会或是必须要做的事情很困难:","scoresAagree":[4,3,2,1,0]},{"id":10,"text":"当你必须长时间坐着时，你会坐立不安或者扭动手脚:","scoresAagree":[4,3,2,1,0]},{"id":11,"text":"你在开会这样需要坐好的场合中离开座位:","scoresAagree":[4,3,2,1,0]},{"id":12,"text":"你觉得静不下来，坐不住而且烦躁不安:","scoresAagree":[4,3,2,1,0]},{"id":13,"text":"当有自己独处的时间时，你觉得使自己平静和放松很困难:","scoresAagree":[4,3,2,1,0]},{"id":14,"text":"你像被马达所驱动一样，觉得自己过度地活跃，不得不做事情:","scoresAagree":[4,3,2,1,0]},{"id":15,"text":"在社交场合中，你会发现自己话讲得太多:","scoresAagree":[4,3,2,1,0]},{"id":16,"text":"当与他人交谈时，你会在别人还没把话讲完前就插嘴或接话替对方把话讲完:","scoresAagree":[4,3,2,1,0]},{"id":17,"text":"在需要排队的场合时，你觉得长时间安静的排队很困难:","scoresAagree":[4,3,2,1,0]},{"id":18,"text":"你会在别人忙碌时打断别人:","scoresAagree":[4,3,2,1,0]}]}');var x=t(8872);class h extends l.Component{getQuestionDetail(){return d.Q}calculateScores(){let e=0,s=0;return Object.entries(this.state.answers).forEach(t=>{let[r,l]=t,i=parseInt(r);i>=1&&i<=9?e+=l:i>=10&&i<=18&&(s+=l)}),{scoreA:e,scoreB:s}}calculateResult(e,s){let t,r;return e<=16?s<=16?(t="A",r="A"):s<=23?(t="C",r="A"):(t="C",r="B"):e<=23?(t=s<=16?"B":s<=23?"D":"E",r="A"):(t=s<=16?"B":s<=23?"E":"D",r="B"),({A:{A:"您不太可能有ADHD"},B:{A:"您很有可能有ADHD-I（注意力缺失为主）",B:"您非常有可能有ADHD-I（注意力缺失为主）"},C:{A:"您很有可能有ADHD-H（多动/冲动障碍为主）",B:"您非常有可能有ADHD-H（多动/冲动障碍为主）"},D:{A:"您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合）",B:"您非常有可能有ADHD-C（注意力缺失与多动/冲动障碍混合）"},E:{A:"您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合，其中多动/冲动障碍比较严重）",B:"您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合，其中注意力缺失比较严重）"}})[t][r]}render(){let{showResultModal:e,showInfoModal:s,scoreA:t,scoreB:l,result:d}=this.state,h=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o,{icon:(0,r.jsx)("i",{className:"ri-information-2-line text-xl text-rose-400"}),content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:"text-gray-600",children:["焦虑 / 抑郁 / 睡眠障碍",(0,r.jsx)("strong",{children:"等其他情况"}),"均有可能造成分值偏高"]}),(0,r.jsxs)("p",{className:"text-sm text-gray-500 mt-2",children:["本量表",(0,r.jsx)("strong",{children:"仅供筛查"}),"，",(0,r.jsx)("strong",{children:"不代表"}),"确诊或作为诊断依据"]})]})}),(0,r.jsx)(o,{icon:(0,r.jsx)("i",{className:"ri-lightbulb-line text-xl text-primary"}),iconBg:"bg-green-100",content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-xs text-gray-600",children:"本量表参考文献："}),(0,r.jsxs)("p",{className:"text-xs text-gray-500 mt-2",children:[(0,r.jsx)("a",{href:"https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/adhd/18Q_Chinese%20(Traditional)_final.pdf",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-gray-600 transition-colors",children:"18Q-Chinese-Traditional.pdf"})," ","转自世界卫生组织 Composite International Diagnostic Interview"]}),(0,r.jsx)("p",{className:"text-xs text-gray-500 mt-2",children:"* 本站符合 GDPR 数据保护条例。不会使用 Cookie 记录和存储任何可识别个人身份的信息"})]})})]});return(0,r.jsx)(i.A,{title:"成人 ADHD 自填量表 (ASRS) | 青衫 Neuro",description:"注意力缺陷过动障碍（ADHD）成人测试量表，用于筛查成年人存在ADHD的可能性",children:(0,r.jsxs)("main",{className:"max-w-3xl mx-auto px-4 py-8",children:[(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-sm p-8",children:[(0,r.jsxs)("div",{className:"text-center mb-8",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"成人 ADHD 自填量表 (ASRS)"}),(0,r.jsx)("div",{className:"mt-2",children:h})]}),(0,r.jsx)(c,{showModal:s,onClose:this.closeInfoModal,content:h}),(0,r.jsxs)("form",{className:"space-y-8",onSubmit:this.handleSubmit,children:[(0,r.jsx)("div",{className:"space-y-10",children:this.getQuestionDetail().map(e=>(0,r.jsx)(a.A,{question:e,degree:["经常这样","从来没有"],onAnswerChange:this.handleRadioChange},"quotients_".concat(e.id)))}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20",children:"提交"})]})]}),(0,r.jsx)(n.A,{scores:[{title:"A部分",subtitle:"注意力障碍",score:t},{title:"B部分",subtitle:"多动/冲动障碍",score:l}],result:d,showModal:e,onClose:this.closeModal}),(0,r.jsx)(x.A,{isShowButton:!0,isShowProgress:!0})]})})}constructor(...e){super(...e),this.state={answers:{},showResultModal:!1,showInfoModal:!0,scoreA:0,scoreB:0,result:""},this.closeModal=()=>{this.setState({showResultModal:!1})},this.closeInfoModal=()=>{this.setState({showInfoModal:!1})},this.handleRadioChange=(e,s)=>{this.setState(t=>({answers:{...t.answers,[e]:parseInt(s)}}))},this.handleSubmit=e=>{if(e.preventDefault(),Object.keys(this.state.answers).length<this.getQuestionDetail().filter(e=>0!==e.id).length){alert("请完成量表所有问题的作答");return}let{scoreA:s,scoreB:t}=this.calculateScores(),r=this.calculateResult(s,t);this.setState({scoreA:s,scoreB:t,result:r,showResultModal:!0})}}}let m=h},8872:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});var r=t(8017),l=t(4109);t(4475);class i extends l.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){let{visible:e,progress:s}=this.state,{isShowProgress:t,isShowButton:l}=this.props;if(!l&&!t)return null;let i=36*Math.PI;return(0,r.jsx)("div",{className:"fixed right-4 bottom-4 z-50",children:(0,r.jsxs)("div",{className:"relative w-10 h-10",children:[l&&e&&(0,r.jsx)("button",{onClick:this.scrollToTop,className:"absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-secondary flex items-center justify-center z-10","aria-label":"回到顶部",children:(0,r.jsx)("i",{className:"ri-arrow-up-line text-xl text-gray-600"})}),t&&(0,r.jsxs)("svg",{className:"absolute transform -rotate-90 w-10 h-10 z-20 pointer-events-none",viewBox:"0 0 ".concat(40," ").concat(40),children:[(0,r.jsx)("circle",{className:"text-gray-200",strokeWidth:4,stroke:"currentColor",fill:"transparent",r:18,cx:20,cy:20}),(0,r.jsx)("circle",{className:"text-primary transition-all duration-300",strokeWidth:4,strokeDasharray:i,strokeDashoffset:i-s/100*i,strokeLinecap:"round",stroke:"currentColor",fill:"transparent",r:18,cx:20,cy:20})]})]})})}constructor(...e){super(...e),this.state={visible:!1,progress:0},this.handleScroll=()=>{let{isShowProgress:e,isShowButton:s}=this.props;if(e){let e=document.querySelector("footer"),s=0;if(e){let t=window.scrollY,r=e.offsetTop;s=Math.min(t/(r-window.innerHeight)*100,100),this.setState({progress:s})}else s=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,this.setState({progress:s})}s&&(window.scrollY>300?this.setState({visible:!0}):this.setState({visible:!1}))},this.scrollToTop=()=>{window.scrollTo({top:0,behavior:"smooth"})}}}let a=i},9061:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});var r=t(8017);t(4109),t(4475);let l=e=>{let{title:s,subtitle:t,score:l}=e;return(0,r.jsxs)("div",{className:"flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-primary/10 to-indigo-600/10",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-sm font-medium text-gray-500",children:s}),(0,r.jsx)("p",{className:"text-lg font-semibold mt-1",children:t})]}),(0,r.jsx)("div",{className:"text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent",children:l})]})},i=e=>{let{scores:s,result:t,showModal:i,onClose:a}=e;return i?(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-black/60",onClick:a}),(0,r.jsxs)("div",{className:"bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10 max-h-[90vh] overflow-y-auto",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:"量表结果"}),(0,r.jsx)("button",{className:"text-gray-400 hover:text-gray-500",onClick:a,children:(0,r.jsx)("i",{className:"ri-close-line text-xl"})})]}),(0,r.jsxs)("div",{className:"space-y-6",children:[s.map((e,s)=>(0,r.jsx)(l,{...e},s)),(0,r.jsxs)("div",{className:"border-t border-gray-200 pt-4",children:[(0,r.jsxs)("div",{className:"flex items-center mb-3",children:[(0,r.jsx)("i",{className:"ri-mental-health-line text-primary text-xl mr-2"}),(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"测试结果表示"})]}),(0,r.jsx)("p",{className:"text-gray-600 bg-gray-50 p-4 rounded-lg",children:t})]}),(0,r.jsxs)("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[(0,r.jsxs)("div",{className:"flex items-center mb-2",children:[(0,r.jsx)("i",{className:"ri-information-line text-yellow-500 mr-2"}),(0,r.jsx)("span",{className:"text-sm font-medium text-yellow-800",children:"注意事项"})]}),(0,r.jsxs)("div",{className:"text-sm text-yellow-700 space-y-1",children:[(0,r.jsxs)("p",{children:["* 焦虑 / 抑郁 / 睡眠障碍",(0,r.jsx)("strong",{children:"等其他情况"}),"均有可能造成分值偏高"]}),(0,r.jsxs)("p",{children:["* 本量表",(0,r.jsx)("strong",{children:"仅供筛查"}),"，",(0,r.jsx)("strong",{children:"不代表"}),"确诊或作为诊断依据"]})]})]})]})]})]}):null}},9292:(e,s,t)=>{"use strict";t.d(s,{A:()=>a});var r=t(8017),l=t(4109);class i extends l.Component{render(){let{question:e,degree:s,onAnswerChange:t}=this.props;return(0,r.jsxs)("div",{className:"question-item",children:[(0,r.jsxs)("p",{className:"text-lg text-gray-900",children:[e.id,". ",e.text]}),(0,r.jsxs)("div",{className:"flex items-center justify-center my-6",children:[(0,r.jsx)("div",{className:"text-gray-700 items-center text-center break-words mr-2 md:mr-6",children:s[0]}),(0,r.jsx)("div",{className:"flex gap-1 md:gap-8 items-center",children:e.scoresAagree.map((s,l)=>{let i="w-5 h-5 md:w-6 md:h-6";return 0===l||l===e.scoresAagree.length-1?i="w-8 h-8 md:w-9 md:h-9":1===l||l===e.scoresAagree.length-2?i="w-7 h-7 md:w-8 md:h-8":l===e.scoresAagree.length-3&&(i="w-6 h-6 md:w-7 md:h-7"),(0,r.jsxs)("label",{className:"radio-label items-center justify-center",children:[(0,r.jsx)("input",{type:"radio",name:e.id,value:s,className:"hidden peer",onChange:()=>t(e.id,s)}),(0,r.jsx)("div",{className:"".concat(i," border-2 border-gray-500 rounded-full peer-checked:border-primary peer-checked:bg-primary duration-200")})]},"quotients_".concat(e.id,"_").concat(l))})}),(0,r.jsx)("div",{className:"text-gray-700 items-center text-center break-words ml-2 md:ml-6",children:s[1]})]})]})}}let a=i}},e=>{var s=s=>e(e.s=s);e.O(0,[825,132,636,593,792],()=>s(411)),_N_E=e.O()}]);