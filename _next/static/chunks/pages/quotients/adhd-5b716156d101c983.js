(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{411:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/quotients/adhd",function(){return s(2585)}])},2585:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g});var r=s(8017),a=s(4109),i=s(4760),n=s(7132),o=s(9292),l=s(9061),c=s(1477),d=s(5809);let h=JSON.parse('{"Q":[{"id":1,"text":"当必须完成一件枯燥或者困难的计划任务时，你会粗心犯错:","scoresAagree":[4,3,2,1,0]},{"id":2,"text":"当正在做枯燥或重复性的工作时，你会走神想其他的事情:","scoresAagree":[4,3,2,1,0]},{"id":3,"text":"有人面对你说话时，你很难专心地听完他说的内容:","scoresAagree":[4,3,2,1,0]},{"id":4,"text":"一旦完成任何计划中最具挑战的部分之后，你觉得完成最后的细节是有困难的:","scoresAagree":[4,3,2,1,0]},{"id":5,"text":"当必须从事需要有组织规划性的任务时，你觉得井然有序地完成是有困难的:","scoresAagree":[4,3,2,1,0]},{"id":6,"text":"当有一件需要复杂思考的工作时，你经常逃避或是延后开始:","scoresAagree":[4,3,2,1,0]},{"id":7,"text":"在家里或是在工作时，你经常乱放东西或是找不到东西:","scoresAagree":[4,3,2,1,0]},{"id":8,"text":"你经常因身旁的活动或声音而分心:","scoresAagree":[4,3,2,1,0]},{"id":9,"text":"你认为记住约会或是必须要做的事情很困难:","scoresAagree":[4,3,2,1,0]},{"id":10,"text":"当你必须长时间坐着时，你会坐立不安或者扭动手脚:","scoresAagree":[4,3,2,1,0]},{"id":11,"text":"你在开会这样需要坐好的场合中离开座位:","scoresAagree":[4,3,2,1,0]},{"id":12,"text":"你觉得静不下来，坐不住而且烦躁不安:","scoresAagree":[4,3,2,1,0]},{"id":13,"text":"当有自己独处的时间时，你觉得使自己平静和放松很困难:","scoresAagree":[4,3,2,1,0]},{"id":14,"text":"你像被马达所驱动一样，觉得自己过度地活跃，不得不做事情:","scoresAagree":[4,3,2,1,0]},{"id":15,"text":"在社交场合中，你会发现自己话讲得太多:","scoresAagree":[4,3,2,1,0]},{"id":16,"text":"当与他人交谈时，你会在别人还没把话讲完前就插嘴或接话替对方把话讲完:","scoresAagree":[4,3,2,1,0]},{"id":17,"text":"在需要排队的场合时，你觉得长时间安静的排队很困难:","scoresAagree":[4,3,2,1,0]},{"id":18,"text":"你会在别人忙碌时打断别人:","scoresAagree":[4,3,2,1,0]}]}');var x=s(8872);class u extends a.Component{componentDidMount(){let e=i.A.get(this.state.quotientsName);e&&this.setState({answers:JSON.parse(e)})}getQuestionDetail(){return h.Q}calculateScores(){let e=0,t=0;return Object.entries(this.state.answers).forEach(s=>{let[r,a]=s,i=parseInt(r);i>=1&&i<=9?e+=a.value:i>=10&&i<=18&&(t+=a.value)}),{scoreA:e,scoreB:t}}calculateResult(e,t){let s,r;return e<=16?t<=16?(s="A",r="A"):t<=23?(s="C",r="A"):(s="C",r="B"):e<=23?(s=t<=16?"B":t<=23?"D":"E",r="A"):(s=t<=16?"B":t<=23?"E":"D",r="B"),({A:{A:"您不太可能有ADHD"},B:{A:"您很有可能有ADHD-I（注意力缺失为主）",B:"您非常有可能有ADHD-I（注意力缺失为主）"},C:{A:"您很有可能有ADHD-H（多动/冲动障碍为主）",B:"您非常有可能有ADHD-H（多动/冲动障碍为主）"},D:{A:"您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合）",B:"您非常有可能有ADHD-C（注意力缺失与多动/冲动障碍混合）"},E:{A:"您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合，其中多动/冲动障碍比较严重）",B:"您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合，其中注意力缺失比较严重）"}})[s][r]}render(){let{showResultModal:e,showInfoModal:t,scoreA:s,scoreB:a,result:i,answers:h}=this.state,u=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{icon:(0,r.jsx)("i",{className:"ri-information-2-line text-xl text-rose-400"}),content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:"text-gray-600",children:["焦虑 / 抑郁 / 睡眠障碍",(0,r.jsx)("strong",{children:"等其他情况"}),"均有可能造成分值偏高"]}),(0,r.jsxs)("p",{className:"text-gray-600 mt-2",children:["本量表",(0,r.jsx)("strong",{children:"仅供筛查"}),"，",(0,r.jsx)("strong",{children:"不代表"}),"确诊或作为诊断依据"]})]})}),(0,r.jsx)(c.A,{icon:(0,r.jsx)("i",{className:"ri-lightbulb-line text-xl text-primary"}),iconBg:"bg-green-100",content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-xs text-gray-600",children:"本量表参考文献："}),(0,r.jsxs)("p",{className:"text-xs text-gray-500 mt-1",children:[(0,r.jsx)("a",{href:"https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/adhd/18Q_Chinese%20(Traditional)_final.pdf",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-gray-600 transition-colors",children:"18Q-Chinese-Traditional.pdf"})," ","转自世界卫生组织 Composite International Diagnostic Interview"]}),(0,r.jsxs)("p",{className:"text-xs text-gray-500 mt-2",children:["* 本站符合 GDPR 欧盟通用数据保护条例。页面在您的本地浏览器中使用 Cookie 临时保存量表填写选项，并于2小时后自动",(0,r.jsx)("button",{onClick:this.clearAnswersCookie,className:"underline hover:text-gray-600 transition-colors",children:"删除"}),"。"]})]})})]});return(0,r.jsx)(n.A,{title:"成人 ADHD 自填量表 (ASRS) | 青衫 Neuro",description:"注意力缺陷过动障碍（ADHD）成人测试量表，用于筛查成年人存在ADHD的可能性",children:(0,r.jsxs)("main",{className:"max-w-3xl mx-auto px-4 py-8",children:[(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-sm p-8",children:[(0,r.jsxs)("div",{className:"text-center mb-8",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"成人 ADHD 自填量表 (ASRS)"}),(0,r.jsx)("div",{className:"mt-2",children:u})]}),(0,r.jsx)(d.A,{showModal:t,onClose:this.closeInfoModal,content:u}),(0,r.jsxs)("form",{className:"space-y-8",onSubmit:this.handleSubmit,children:[(0,r.jsx)("div",{className:"space-y-10",children:this.getQuestionDetail().map(e=>{var t;return(0,r.jsx)(o.A,{question:e,degree:["经常这样","从来没有"],onAnswerChange:this.handleRadioChange,checkedIndex:null===(t=h[e.id])||void 0===t?void 0:t.index},"quotients_".concat(e.id))})}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20",children:"提交"})]})]}),(0,r.jsx)(l.A,{scores:[{title:"A部分",subtitle:"注意力障碍",score:s},{title:"B部分",subtitle:"多动/冲动障碍",score:a}],result:i,showModal:e,onClose:this.closeModal}),(0,r.jsx)(x.A,{isShowButton:!0,isShowProgress:!0})]})})}constructor(...e){super(...e),this.state={quotientsName:"answers_adhd",answers:{},showResultModal:!1,showInfoModal:!0,scoreA:0,scoreB:0,result:""},this.closeModal=()=>{this.setState({showResultModal:!1})},this.closeInfoModal=()=>{this.setState({showInfoModal:!1})},this.handleRadioChange=(e,t,s)=>{let r={...this.state.answers,[e]:{index:s,value:parseInt(t)}};i.A.set(this.state.quotientsName,JSON.stringify(r),{expires:1/12}),this.setState({answers:r})},this.clearAnswersCookie=()=>{i.A.remove(this.state.quotientsName),this.setState({answers:{}})},this.handleSubmit=e=>{if(e.preventDefault(),Object.keys(this.state.answers).length<this.getQuestionDetail().filter(e=>0!==e.id).length){alert("请完成量表所有问题的作答");return}let{scoreA:t,scoreB:s}=this.calculateScores(),r=this.calculateResult(t,s);this.setState({scoreA:t,scoreB:s,result:r,showResultModal:!0})}}}let g=u}},e=>{var t=t=>e(e.s=t);e.O(0,[825,132,870,636,593,792],()=>t(411)),_N_E=e.O()}]);