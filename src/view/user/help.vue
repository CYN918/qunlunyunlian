<template>
	<div class="box">
		<mt-header title="帮助中心">
            <router-link to="/index_self" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        
        <mt-navbar v-model="selected">
        	<mt-tab-item id="0">雇主操作指导</mt-tab-item>
            <mt-tab-item id="1">平台收费标准</mt-tab-item>
            <mt-tab-item id="2">工程师操作指导</mt-tab-item>
        </mt-navbar>
        
        <mt-tab-container v-model="selected">
        	<mt-tab-container-item id="0">
        		<div class="col-md-12 help-center-answers help-minheg690">
                    <div class="row close-space-tip">
                        <p style="text-align:center;line-height:150%">
                            <strong><span style="font-family: 宋体;line-height: 150%;font-size: 29px"><span style="font-family:宋体">雇主操作指南</span></span></strong>
                        </p>
                        <p style="line-height:150%">
                            <span style=";font-family:宋体;line-height:150%;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%;text-align: left;">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">一、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">注册</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">雇主只需要简单注册，不需要认证就能发布项目；首先打开浏览器输入网址</span>http://www.qlylian.com<span style="font-family:宋体">，点击右上角“注册”进入注册页面，输入手机号码，点击“获取验证码”；填写验证码后输入个人密码，提交即完成注册；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <strong><span style="font-family: 宋体;font-size: 16px"><span style="font-family:宋体">注册后，即可发布项目；如果同时向在平台接项目，还需要进一步实名认证并完善个人资料由平台审核后方可；</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="199" height="233" src="http://img.qlylian.com/images/images01.png" /><img width="100%" height="190" src="http://img.qlylian.com/images/images02.png" /><strong><span style="font-family: 宋体;font-size: 16px">&nbsp;</span></strong>
                        </p>
                        <p style="line-height:150%;text-align: left;">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">二、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">项目发布</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">雇主注册成功后，点击导航栏的</span>“发布项目”即可发布项目；发布项目有两种模式，第一种自己发布项目，雇主自己填写项目的相关信息后，自行选择工程师作业，所有项目过程均由雇主自行操作，平台协助指导；第二种委托平台发布，雇主只需填写项目大致信息和联系方式，平台服务人员会直接联系雇主，由平台发布项目和负责项目的全过程，包括项目质量、项目进度、项目交付等；全程不需要雇主过多参与，只需接受项目成果；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">目前，平台可发布造价、工程咨询、工程师设计、标书编制和问题咨询五类项目；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="100%" height="148" src="http://img.qlylian.com/images/images03.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">对于不同的项目填写的数据不一样，现以造价为例；</span></span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-size:16px">1、&nbsp;</span><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">点击</span>“造价图标”，选择您需要发布的项目对应的类型；包括造价类别、造价所属专业和部分工程明细；点击“下一步”；</span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-size:16px">2、&nbsp;</span><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">填写项目的相关信息、描述和项目要求；内容包括：项目所在地址、期望的交付日期、项目规模、项目单体数量、要求项目使用的软件、项目的详细描述、预估项目总造价、上传可以上传的有关图纸和填写项目的报价，并选择项目竞标模式；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">注意：</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">（</span>1<span style="font-family:宋体">）项目的描述，可参考系统自带的模板进行修改；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">（</span>2<span style="font-family:宋体">）雇主报价有三种模式，分别为“按咨询服务费”报价、“按当地政府收费标准”和“按总造价计费”报价；如果雇主报价方式选择的是按当地政府收费标准和按总造价计费，则必须填写预估项目总造价；详细的收费规则请参考群伦云联《平台收费标准》；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">（</span>3<span style="font-family:宋体">）上传的文件，雇主可自行加密；加密后，任何人必须获得雇主的密码才能下载；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">（</span>4<span style="font-family:宋体">）项目发布后，有两种竞标模式；第一种一口价模式，即所有投标人员不可出价，最终价格以雇主报价为准；第二种竞价模式，即投标时工程师需要报出自己的价格，最终的价格以中标工程师的出价为准；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="278" height="150" src="http://img.qlylian.com/images/images04.png" /><img width="230" height="163" src="http://img.qlylian.com/images/images05.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-size:16px">3、&nbsp;</span><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">填写完项目信息后，点击下一步，确认项目信息是否有误，并填写项目标题和发包推荐人（若有才填写，且发包推荐人必须已经注册了群伦云联平台）；填写后点击</span>“确认发布”，项目即已发布成功；发布成功后，项目需要再由平台审核，以再次确认项目的真实性和项目信息准确无误；审核通过，项目进入投标环节，任何有资格的工程师均可在平台竞标该项目；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="100%" height="289" src="http://img.qlylian.com/images/images06.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%;text-align: left;">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">三、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">选工程师</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">项目发布后，将不断有工程师参与投标；雇主可在项目详情页面查看已投标的工程师，点击工程师头像可查看该工程师详细信息；包括承做的历史项目、工作经验、工作履历、老雇主对工程师的评价；如果投标的工作室，还可查看工作室的团队情况；如果投标的企业，还可查看企业营业执照、法人等企业相关信息；雇主还可直接电话与竞标人进行沟通；最终雇主可根据这些信息和价格选择最优合作伙伴；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">确定合作的工程师后，点击投标工程师后面的</span>“雇佣”按钮，即与该工程师达成了合作协议；被雇佣的工程师将显示“中标”两字；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="100%" height="177" src="http://img.qlylian.com/images/images07.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%;text-align: left;">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">四、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">托管资金</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">雇主选择工程师后，需要托管资金后，工程师才能开始作业；雇主根据中标工程师确认的咨询费，进行资金托管；咨询费低于</span>5000<span style="font-family:宋体">的项目，作业前雇主需要全额托管咨询费；咨询费超过</span><span style="font-family:Calibri">5000</span><span style="font-family:宋体">元的项目，作业前雇主需托管一半的咨询费到平台，剩下一半将在成果交付时统一核算后支付，多退少补；如选择的是“按当地政府收费标准”和“按总造价计费”报价，则系统会根据预估总造价，预估咨询费；雇主根据预估咨询费进行资金托管，待作业完成后，再根据实际总造价进行核算，多退少补的原则；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="100%" height="145" src="http://img.qlylian.com/images/images08.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%;text-align: left;">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">五、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">项目验收</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">雇主托管完资金后，工程师开始作业；作业完成后，将由成果审核人严格审核成果质量，审核通过后系统将通知到雇主进行尾款支付；支付完尾款雇主可查看和下载成果文件，并对成果文件进行确认验收；如有问题，可随时退回工程师修正完善，成果审核人再次重新审核成果；如没有问题，点击</span>“确认验收”；验收后点击“确认付款”，咨询费将自动支付到工程师平台账户上；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="100%" height="279" src="http://img.qlylian.com/images/images09.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="352" height="371" src="http://img.qlylian.com/images/images10.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%;text-align: left;">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">六、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">评价</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">项目确认验收后工程师、雇主、平台可以进行互相评价；点击</span>“合作评价”，雇主对工程师进行评价，评价后，该项目即已完成；雇主的评价对工程师至关重要，会直接影响到工程师接下来项目的竞标；</span>
                        </p>
                        <p style="text-align: center;">
                            <img width="100%" height="162" src="http://img.qlylian.com/images/images11.png" />
                        </p>
                        <p>
                            <br/>
                        </p>
                    </div>
                </div>
        	</mt-tab-container-item>
            <mt-tab-container-item id="1">
            	<div class="col-md-12 help-center-answers help-minheg690">
                    <div class="row close-space-tip">
                        <p style="text-align:center;line-height:150%">
                            <strong><span style="font-size:29px;line-height: 150%;font-family:宋体">群伦云联收费标准</span></strong>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-size: 16px;line-height:150%">&nbsp;</span>
                        </p>
                        <p style="line-height:150%">
                            <strong><span style="font-size:19px;line-height:150%;font-family:宋体">一、雇主发布项目和工程师投标</span></strong>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-size: 16px;line-height:150%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:16px;line-height:150%;font-family:宋体">雇主在群伦云联上发布项目时，与工程师合作有三种方式；</span>
                        </p>
                        <p class="MsoListParagraph" style="line-height:150%">
                            <span style="font-size:16px;line-height:150%">1、</span><span style="font-size:16px;line-height:150%;font-family:宋体">直接按照咨询服务费支付，雇主发布项目时，填写该项目的咨询服务费金额；对于竞标项目，工程师投标时填写自己的报价咨询服务费金额即可；</span>
                        </p>
                        <p class="MsoListParagraph" style="text-indent:0;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family: 宋体">咨询费低于</span><span style="font-size:16px;line-height:150%">5000</span><span style="font-size: 16px;line-height:150%;font-family:宋体">的项目，作业前雇主需要全额托管咨询费；咨询费超过</span><span style="font-size:16px;line-height:150%">5000</span><span style="font-size:16px;line-height:150%;font-family:宋体">元的项目，作业前雇主需托管一半的咨询费到平台，剩下一半将在成果交付时统一核算后支付，多退少补；</span>
                        </p>
                        <p class="MsoListParagraph" style="line-height:150%">
                            <span style="font-size:16px;line-height:150%">2、</span><span style="font-size:16px;line-height:150%;font-family:宋体">按照当地收费标准下浮，雇主发布项目时，填写百分比；即按照当地政府收费标准下浮百分之多少；实际支付的工程师的费用，将根据咨询后成果文件的实际总造价和当地政府的收费标准，乘以下浮的百分比计算；对于竞标项目，工程师投标时填写自己能接受的比例；</span>
                        </p>
                        <p class="MsoListParagraph" style="text-indent:0;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family: 宋体">该收费模式，雇主发布项目时需要填写预估总造价，系统将根据预估总造价预估咨询费；咨询费低于</span><span style="font-size:16px;line-height:150%">5000</span><span style="font-size:16px;line-height:150%;font-family:宋体">的项目，作业前雇主需要全额托管咨询费，咨询费超过</span><span style="font-size:16px;line-height:150%">5000</span><span style="font-size:16px;line-height:150%;font-family:宋体">元的项目，作业前雇主需托管一半的咨询费到平台；成果交付后，系统将根据实际总造价和剩余未交纳的咨询费统一进行核算，多退少补；</span>
                        </p>
                        <p class="MsoListParagraph" style="line-height:150%">
                            <span style="font-size:16px;line-height:150%">3、</span><span style="font-size:16px;line-height:150%;font-family:宋体">按照总造价支付，雇主发布项目时，填写千分比；实际支付的工程师的费用，将根据咨询后的成果文件的实际总造价乘以千分比计算；对于竞标项目，工程师投标时填写自己能接受的比例；</span>
                        </p>
                        <p class="MsoListParagraph" style="text-indent:0;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family: 宋体">该收费模式，雇主发布项目时需要填写预估总造价，系统将根据预估总造价预估咨询费；咨询费低于</span><span style="font-size:16px;line-height:150%">5000</span><span style="font-size:16px;line-height:150%;font-family:宋体">的项目，作业前雇主需要全额托管咨询费，咨询费超过</span><span style="font-size:16px;line-height:150%">5000</span><span style="font-size:16px;line-height:150%;font-family:宋体">元的项目，作业前雇主需托管一半的咨询费到平台；成果交付后，系统将根据实际总造价和剩余未交纳的咨询费统一进行核算，多退少补；</span>
                        </p>
                        <p class="MsoListParagraph" style="text-indent:0;line-height:150%">
                            <span style="font-size:16px;line-height:150%">&nbsp;</span>
                        </p>
                        <p class="MsoListParagraph" style="text-indent:0;line-height:150%">
                            <span style="font-size:16px;line-height:150%">&nbsp;</span>
                        </p>
                        <p style="line-height:150%">
                            <strong><span style="font-size:19px;line-height:150%;font-family:宋体">二、平台费用分配标准</span></strong>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%"><img width="100%" height="319" src="http://img.qlylian.com/images/images24.png"/></span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size:16px;line-height:150%;font-family:宋体">项目完成后，将有五位相关对象获取利益，分别为项目介绍人、介绍工程师入驻的介绍人、工程师、成果审核人、群伦云联平台；获取比例请见上图；</span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">&nbsp;</span>
                        </p>
                        <p style="text-align:left;text-indent:28px;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family: 宋体">项目完成后，成果审核根据项目考核标准表，直接勾选；系统将自动获取工程师在本项目的得分；工程师项目评分对照表：</span>
                        </p>
                        <table>
                            <tbody>
                                <tr class="firstRow">
                                    <td width="142" valign="top" style="border: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <strong><span style="font-size:16px;line-height:   150%;font-family:宋体">工程师得分</span></strong>
                                        </p>
                                    </td>
                                    <td width="135" valign="top" style="border-top: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black; border-image: initial; border-left: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <strong><span style="font-size:16px;line-height:   150%;font-family:宋体">工程师获得提成</span></strong>
                                        </p>
                                    </td>
                                    <td width="160" valign="top" style="border-top: 1px solid black; border-right: 1px solid black; border-bottom: 1px solid black; border-image: initial; border-left: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <strong><span style="font-size:16px;line-height:   150%;font-family:宋体">成果审核人获得提成</span></strong>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="142" valign="top" style="border-right: 1px solid black; border-bottom: 1px solid black; border-left: 1px solid black; border-image: initial; border-top: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">95~100</span><span style="font-size:16px;line-height:150%;font-family:宋体">分</span>
                                        </p>
                                    </td>
                                    <td width="135" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">82%</span>
                                        </p>
                                    </td>
                                    <td width="160" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">3%</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="142" valign="top" style="border-right: 1px solid black; border-bottom: 1px solid black; border-left: 1px solid black; border-image: initial; border-top: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">90~95</span><span style="font-size:16px;line-height:150%;font-family:宋体">分</span>
                                        </p>
                                    </td>
                                    <td width="135" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">81%</span>
                                        </p>
                                    </td>
                                    <td width="160" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">4%</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="142" valign="top" style="border-right: 1px solid black; border-bottom: 1px solid black; border-left: 1px solid black; border-image: initial; border-top: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">85~90</span><span style="font-size:16px;line-height:150%;font-family:宋体">分</span>
                                        </p>
                                    </td>
                                    <td width="135" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">80%</span>
                                        </p>
                                    </td>
                                    <td width="160" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">5%</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="142" valign="top" style="border-right: 1px solid black; border-bottom: 1px solid black; border-left: 1px solid black; border-image: initial; border-top: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">80~85</span><span style="font-size:16px;line-height:150%;font-family:宋体">分</span>
                                        </p>
                                    </td>
                                    <td width="135" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">79%</span>
                                        </p>
                                    </td>
                                    <td width="160" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">6%</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="142" valign="top" style="border-right: 1px solid black; border-bottom: 1px solid black; border-left: 1px solid black; border-image: initial; border-top: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">75~80</span><span style="font-size:16px;line-height:150%;font-family:宋体">分</span>
                                        </p>
                                    </td>
                                    <td width="135" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">78%</span>
                                        </p>
                                    </td>
                                    <td width="160" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">7%</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="142" valign="top" style="border-right: 1px solid black; border-bottom: 1px solid black; border-left: 1px solid black; border-image: initial; border-top: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">70~75</span><span style="font-size:16px;line-height:150%;font-family:宋体">分</span>
                                        </p>
                                    </td>
                                    <td width="135" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">77%</span>
                                        </p>
                                    </td>
                                    <td width="160" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">8%</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="142" valign="top" style="border-right: 1px solid black; border-bottom: 1px solid black; border-left: 1px solid black; border-image: initial; border-top: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">65~70</span><span style="font-size:16px;line-height:150%;font-family:宋体">分</span>
                                        </p>
                                    </td>
                                    <td width="135" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">76%</span>
                                        </p>
                                    </td>
                                    <td width="160" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">9%</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="142" valign="top" style="border-right: 1px solid black; border-bottom: 1px solid black; border-left: 1px solid black; border-image: initial; border-top: none; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">60</span><span style="font-size:16px;line-height:150%;font-family:宋体">分以下</span>
                                        </p>
                                    </td>
                                    <td width="135" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">75%</span>
                                        </p>
                                    </td>
                                    <td width="160" valign="top" style="border-top: none; border-left: none; border-bottom: 1px solid black; border-right: 1px solid black; padding: 0px 7px;">
                                        <p style="text-align:center;line-height:150%">
                                            <span style="font-size:16px;line-height:150%">10%</span>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">&nbsp;</span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">&nbsp;</span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family:宋体">现以项目成交金额</span><span style="font-size:16px;line-height:150%">10000</span><span style="font-size:16px;line-height:150%;font-family:宋体">元，工程师项目得分</span><span style="font-size:16px;line-height:150%">92</span><span style="font-size:16px;line-height:150%;font-family:宋体">分为例子，最终各对象获得的金额如下：</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">1、</span><span style="font-size:16px;line-height:150%;font-family:宋体">工程师获得金额为：</span><span style="font-size:16px;line-height:150%">10000*81%*95%=7695</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">2、</span><span style="font-size:16px;line-height:150%;font-family:宋体">介绍人获得金额为：</span><span style="font-size:16px;line-height:150%">10000*81%*5%=405</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">3、</span><span style="font-size:16px;line-height:150%;font-family:宋体">项目介绍人获得金额为：</span><span style="font-size:16px;line-height:150%">10000*5%=500</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">4、</span><span style="font-size:16px;line-height:150%;font-family:宋体">成果审核人获得的金额为：</span><span style="font-size:16px;line-height:150%">10000*4%=400</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">5、</span><span style="font-size:16px;line-height:150%;font-family:宋体">平台获得的金额为：</span><span style="font-size:16px;line-height:150%">10000*10%=1000</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family: 宋体">共计</span><span style="font-size: 16px;line-height:150%">10000</span><span style="font-size:16px;line-height: 150%;font-family:宋体">元整；</span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <strong><span style="font-size:16px;line-height:150%;font-family:宋体">注意：如果该项目没有项目介绍人，则项目介绍人的金额由平台获得；如果工程师没有介绍人，则工程师介绍人的费用全部由工程师获得；</span></strong>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family: 宋体">以上为例：</span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family: 宋体">假如该<strong>工程师没有介绍人，项目也没有介绍人</strong>；则最终金额分配如下：</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">1、</span><span style="font-size:16px;line-height:150%;font-family:宋体">工程师获得金额为：</span><span style="font-size:16px;line-height:150%">10000*81*</span><span style="font-size:16px;line-height:150%;font-family:宋体">（</span><span style="font-size:16px;line-height:150%">95%+5%</span><span style="font-size:16px;line-height:150%;font-family:宋体">）</span><span style="font-size:16px;line-height:150%">=8100</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">2、</span><span style="font-size:16px;line-height:150%;font-family:宋体">成果审核人获得的金额为：</span><span style="font-size:16px;line-height:150%">10000*4%=400</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">3、</span><span style="font-size:16px;line-height:150%;font-family:宋体">平台获得的金额为：</span><span style="font-size:16px;line-height:150%">10000*</span><span style="font-size:16px;line-height:150%;font-family:宋体">（</span><span style="font-size:16px;line-height:150%">10%+5%</span><span style="font-size:16px;line-height:150%;font-family:宋体">）</span><span style="font-size:16px;line-height:150%">=1500</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family: 宋体">假如该<strong>工程师有介绍人，项目没有介绍人</strong>；则最终金额分配如下：</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">1、</span><span style="font-size:16px;line-height:150%;font-family:宋体">工程师获得金额为：</span><span style="font-size:16px;line-height:150%">10000*81*95%=7695</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">2、</span><span style="font-size:16px;line-height:150%;font-family:宋体">介绍人获得金额为：</span><span style="font-size:16px;line-height:150%">10000*81%*5%=405</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">3、</span><span style="font-size:16px;line-height:150%;font-family:宋体">成果审核人获得的金额为：</span><span style="font-size:16px;line-height:150%">10000*4%=400</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">4、</span><span style="font-size:16px;line-height:150%;font-family:宋体">平台获得的金额为：</span><span style="font-size:16px;line-height:150%">10000*</span><span style="font-size:16px;line-height:150%;font-family:宋体">（</span><span style="font-size:16px;line-height:150%">10%+5%</span><span style="font-size:16px;line-height:150%;font-family:宋体">）</span><span style="font-size:16px;line-height:150%">=1500</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%;font-family: 宋体">假如该<strong>工程师没有介绍人，项目有介绍人</strong>；则最终金额分配如下：</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">1、</span><span style="font-size:16px;line-height:150%;font-family:宋体">工程师获得金额为：</span><span style="font-size:16px;line-height:150%">10000*81*(95%+5%)=8100</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">2、</span><span style="font-size:16px;line-height:150%;font-family:宋体">成果审核人获得的金额为：</span><span style="font-size:16px;line-height:150%">10000*4%=400</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">3、</span><span style="font-size:16px;line-height:150%;font-family:宋体">项目介绍人获得金额为：</span><span style="font-size:16px;line-height:150%">10000*5%=500</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p class="MsoListParagraph" style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">4、</span><span style="font-size:16px;line-height:150%;font-family:宋体">平台获得的金额为：</span><span style="font-size:16px;line-height:150%">10000*10%=1000</span><span style="font-size:16px;line-height:150%;font-family:宋体">元</span>
                        </p>
                        <p style="text-align:left;line-height:150%">
                            <span style="font-size:16px;line-height:150%">&nbsp;</span>
                        </p>
                        <p>
                            <br/>
                        </p>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
            	<div class="col-md-12 help-center-answers help-minheg690">
                    <div class="row close-space-tip">
                        <p style="text-align:center;line-height:150%">
                            <strong><span style="font-family: 宋体;line-height: 150%;font-size: 29px"><span style="font-family:宋体">工程师操作指导</span></span></strong>
                        </p>
                        <p style="line-height:150%">
                            <span style=";font-family:宋体;line-height:150%;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">一、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">注册</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">任何人进入群伦云联系统均需要注册，打开浏览器输入网址</span></span>
                            <a href="http://www.qlylian.com"><span style="text-decoration:underline;"><span style="font-family: 宋体;color: rgb(0, 0, 255);font-size: 16px">http://www.qlylian.com</span></span>
                            </a><span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">，点击右上角</span>“注册”进入注册页面，输入手机号码，点击“获取验证码”；填写验证码后输入个人密码，提交即完成注册；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <strong><span style="font-family: 宋体;font-size: 16px"><span style="font-family:宋体">注册后，可发布项目；同时请完善个人资料、头像和昵称；</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="199" height="233" src="http://img.qlylian.com/images/images12.png" /><img width="313" height="190" src="http://img.qlylian.com/images/images13.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">二、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">认证</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">注册工程师后，可以查看项目，但不可以投标接项目；想要接项目还需要完成工程师入驻并实名认证；点击</span>“开启工程师之旅”或“工程师入驻”开始入驻认证；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">1<span style="font-family:宋体">、输入手机号码获取验证码提交；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">2<span style="font-family:宋体">、填写个人资料；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">3<span style="font-family:宋体">、填写真实姓名和身份证号；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">4<span style="font-family:宋体">、根据平台政策缴纳会员费用；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">5<span style="font-family:宋体">、平台确认审核会员资料；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <strong><span style="font-family: 宋体;font-size: 16px"><span style="font-family:宋体">审核通过后，请尽快完善工程师履历、职业证书和其他相关资料</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="259" height="127" src="http://img.qlylian.com/images/images14.png" /><img width="225" height="187" src="http://img.qlylian.com/images/images15.png" /><img width="254" height="106" src="http://img.qlylian.com/images/images16.png" /><img width="218" height="162" src="http://img.qlylian.com/images/images17.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">三、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">投标</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">工程师完成入驻认证后，即可参与投标接项目；接项目前，请确认自己的相关信息已经完善；完善后，通过项目展示查找到自己想要竞标的项目，点击项目名称，进入项目详情页面；对于正在竞标的项目，点击</span>“参与投标”；输入自己的项目优势和报价，点击“确定”，即完成该项目的投标；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">投标后，等待雇主选标；如果中标后，系统会短信通知到您，同时项目详情页面会显示您</span>“已中标”，在个人信息的“我参与的项目”会出现项目列表；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="197" height="206" src="http://img.qlylian.com/images/images18.png" /><img width="307" height="186" src="http://img.qlylian.com/images/images19.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">四、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">作业</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">工程师中标后，待雇主托管资金，系统会短信通知到工程师开始作业；同时平台会指定一位项目经理全程跟进该项目，同时负责整个项目的质量、交期和风险管控；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">工程师需要每天在</span>“我参与的项目”上传项目进度和完成情况反馈；项目经理如发现项目交付有较大的风险，会提前更换工程师承做该项目；雇主如发现工程师非常不如意，也可提出更换工程师的申请，经平台确认调节后，确有必要再行更换工程师；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="100%" height="112" src="http://img.qlylian.com/images/images20.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">五、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">交付</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">工程师完成项目后，在</span>“我参与的项目”中点击该项目的“确认交付”，上传所有相关成果文件，描述项目相关内容后提交；提交后由成果审核人确认成果文件是否有误；如发现有问题，需退回重新修改；成果审核通过后，系统将通知雇主将剩余资金全部支付，支付后雇主收到成果文件；如果因工程师或审核人原因，成果存在较大质量问题，将对工程师和审核人进行扣款扣分处理；</span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="100%" height="108" src="http://img.qlylian.com/images/images21.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">六、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">评价</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">雇主收到成果文件，确认无误后，点击</span>“确认付款”；工程师、雇主、平台等相关利益单位均将获得应得的金额；同时工程师、雇主、平台可以进行互相评价；点击“合作评价”，工程师可以对雇主进行评价；评价后，该项目即已完成</span>
                        </p>
                        <p style="line-height:150%">
                            <span style="font-family:Calibri;font-weight:bold;font-size:21px">七、&nbsp;</span><strong><span style="font-family: 宋体;font-size: 21px"><span style="font-family:宋体">收款</span></span></strong>
                        </p>
                        <p style="text-indent:0;line-height:150%">
                            <span style=";font-family:宋体;font-size:16px"><span style="font-family:宋体">项目完成后，工程师或其他利益单位可以在个人财务中查看资金情况，包括资金总额，资金流入和流出详情；同时账户上的金额，可以发起提现申请，申请发起三天内，平台会将提现金额打至个人指定账户上；</span></span>
                        </p>
                        <p style="text-indent:0;line-height:150%;text-align: center;">
                            <img width="336" height="151" src="http://img.qlylian.com/images/images22.png" /><span style=";font-family:宋体;font-size:16px">&nbsp;</span>
                        </p>
                        <p style="text-align: center;">
                            <img width="100%" height="188" src="http://img.qlylian.com/images/images23.png" />
                        </p>
                        <p>
                            <br/>
                        </p>
                    </div>
                </div>
                
            </mt-tab-container-item>
        </mt-tab-container>
        
        <!--底部导航-->
        <index-tab page="3"></index-tab>
	</div>
</template>

<script>
	import indexTab from '@/components/indexTabComponent';
	import { Header } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import { Navbar, TabItem } from 'mint-ui';
    import { Button } from 'mint-ui';
	import axios from 'axios'

	export default {
	    name: 'help',
	    data () {
	        return {
	    	    selected: '0'
	        }
	    },
	    components:{
	  	    indexTab
			
		},
		methods:{
		   
			
		},
	    mounted() {
			
	    }
	}
</script>

<style>
</style>