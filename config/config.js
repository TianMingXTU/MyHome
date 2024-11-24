var config = {
  /*在这里配置你的基本信息，所有数据以字符串形式给出*/
  name: "覃会建",
  sex: "男",
  age: "21",
  email: "qintianming511@gmail.com",
  address: "广东深圳",
  log: "AIDocker",
  excpect_work: "嵌入式软件工程师",

  /*在这里配置首页的座右铭集合*/
  motto: [
    "未来充满未知，但坚韧与智慧是通向成功的唯一钥匙。",
    "时间从不偏爱懒惰者，行动才是打破桎梏的力量。",
    "追求卓越，无论何时都不放弃。Go for it!",
    "志者创造未来，愚者迷失在空谈中。",
    "过往的伤痛已成过往，唯一重要的是今天如何前行。",
    "真理，是摧毁幻觉的利剑，是面对现实的勇气。",
    "心怀远方，虽千里亦不弃。世界纷繁，唯心自有光。",
    "乘风破浪，纵马高歌，前行的路上，每一步皆是风景。",
    "季节更替，气候已变，收获的时刻终将到来。",
    "老骥伏枥，志向如山，岁月无情，心志依旧不灭。",
    "老当益壮，不畏艰难，志向未曾改变。",
    "敢于超越所拥有的，才有可能获得未知的精彩。",
    "青山依旧在，几度夕阳红。岁月不待人，奋斗永不止步。",
    "数风流人物，今朝看我辈。",
  ],

  /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
  welcome:
    "怀才不遇，亦无悔<br>" +
    "心存远志，踏实前行<br>" +
    "荣幸相遇，共同探索未来的无限可能。",

  /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
  about:
    "<p>我是一名人工智能领域的深度探索者，目前担任嵌入式软件研发工程师，致力于人工智能与嵌入式系统的深度融合与创新。我是湘潭大学人工智能专业学士，并持有欧洲学院MBA在线硕士学位，具备跨领域的专业背景。</p>" +
    "<p>我专注于将AI技术应用于实际项目，尤其是在嵌入式系统中推动智能化发展。通过扎实的编程能力、系统架构设计及多项人工智能证书认证，我能够从全局视角解决技术难题，优化产品性能，推动创新。</p>" +
    "<p>我始终秉承不断突破自我的理念，致力于将前沿技术与实际应用紧密结合，推动行业进步与技术创新。</p>",

  /**
   * 在这里配置你的技能点
   * ["技能点", 掌握程度, "技能条颜色"]
   */
  skills: [
    ["Python", 95, "red"],
    ["C", 85, "blue"],
    ["SQL", 80, "#1abc9c"],
    ["Embedded C", 90, "orange"],
    ["Linux", 85, "green"],
    ["Pytorch", 80, "#8e44ad"],
    ["SQL Optimization", 75, "#f39c12"],
    ["Machine Learning", 80, "#3498db"],
    ["Computer Vision", 70, "#e74c3c"],
  ],

  /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
  skills_description:
    "<ul>" +
    "     <li>精通Python和C语言，能够高效开发并优化嵌入式系统和AI应用。</li>" +
    "     <li>深入理解人工智能原理，熟悉机器学习、深度学习及计算机视觉的核心技术。</li>" +
    "     <li>具备扎实的操作系统、计算机网络基础，能够进行高效的系统级开发。</li>" +
    "     <li>熟练掌握Pytorch、TensorFlow等深度学习框架，能够独立开发AI模型并进行优化。</li>" +
    "     <li>精通SQL语句编写、数据库设计及性能调优，具备处理大规模数据的能力。</li>" +
    "     <li>熟悉Linux环境下的开发，能够高效使用基本命令及调试工具。</li>" +
    "     <li>深入了解分布式系统的设计和应用，能够设计可扩展、容错性强的系统架构。</li>" +
    "     <li>了解嵌入式系统开发，精通嵌入式C语言，能够进行低层硬件交互与优化。</li>" +
    "     <li>具备前端开发基础，熟悉HTML、CSS、JavaScript及前端框架，能够进行UI交互优化。</li>" +
    "     <li>熟悉缓存机制、消息队列等系统级优化技术，能够提升系统的性能与可靠性。</li>" +
    "</ul>",

  /**
   * 这里填写你的个人作品展示
   * ["img"，"url", "ProjectName", "brief"]
   * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
   * 通过查看实际效果以调整字题长度
   */
  portfolio: [
    [
      "./rewords/华为认证.png",
      "rewords/华为认证.png",
      "鸿蒙应用开发者高级认证",
      "",
    ],
    [
      "./rewords/魔塔认证.png",
      "rewords/魔塔认证.png",
      "魔塔Agent工程师认证",
      "",
    ],
    [
      "./rewords/阿里认证.png",
      "rewords/阿里认证.png",
      "阿里高级人工智能训练师认证",
      "",
    ],
  ],

  /**
   * 这里填写您的工作经历
   * ["日期"， "工作"， "介绍"]
   * 你可以内嵌HTML标签以排版格式
   */
  work: [
    //如果您内有工作经历，您可以采取下列写法
    // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

    [
      "2024/7/1 — 2024/9/30",
      "<br>人工智能应用研发助理工程师",
      "<p><strong>湘潭贝一科技有限公司 — 研发部</strong></p>" +
        "<p>聚焦大语言模型（LLM）的应用落地，主导设计并实现基于LLM的插件式AI Agent，涵盖从技术调研到产品开发的全流程，推动技术转化为实际价值。</p>" +
        "<p>参与全栈开发，主导实现了以下功能：</p>" +
        "<ul>" +
        "    <li><strong>前端开发：</strong>设计并实现用户友好的交互界面，优化了页面加载速度（提高约30%），显著提升用户体验。</li>" +
        "    <li><strong>后端架构：</strong>基于微服务设计原则，构建高效可靠的服务框架，API响应速度提升40%以上，确保系统的高可用性。</li>" +
        "    <li><strong>数据库优化：</strong>主导数据库架构设计与优化，降低了数据查询延迟约50%，支持海量数据的高效存储与管理。</li>" +
        "</ul>" +
        "<p>项目成功部署于大学校园场景，覆盖超过10,000名师生用户，帮助解决日常事务管理、智能问答等多个实际问题，用户满意度达95%以上。</p>" +
        "<p>技术成果量化表现：</p>" +
        "<ul>" +
        "    <li>通过优化LLM模型推理流程，减少了平均响应时间约20%，降低了服务器资源消耗近15%。</li>" +
        "    <li>产品上线后实现了月活跃用户数（MAU）突破8,000，功能访问量累计超过30,000次。</li>" +
        "    <li>部署后第一季度内为大学管理流程节省了约300小时的人工处理时间。</li>" +
        "</ul>" +
        "<p>实习期间积累了丰富的全栈开发与大语言模型实际应用经验，培养了从产品设计到交付的系统化思维能力。成果获得团队和客户的高度认可，为后续智能应用的开发提供了宝贵的实践参考。</p>",
    ],

    [
      "2024/11/11 — 至今",
      "<br>嵌入式软件研发助理工程师",
      "<p><strong>深圳市ITON公司 — 研发部</strong></p>" +
        "<p>作为嵌入式软件研发助理工程师，深入学习与复习嵌入式系统外设开发相关技术，为后续研发工作打下扎实基础。</p>" +
        "<p>实习第一个月专注于以下内容：</p>" +
        "<ul>" +
        "    <li><strong>嵌入式外设学习：</strong>全面掌握定时器、串口通信（UART）、I2C、SPI等外设接口的原理与实现方法，结合实际开发环境进行功能调试。</li>" +
        "    <li><strong>基础任务执行：</strong>参与公司内部项目的简单任务，例如硬件驱动程序的编写与优化，确保模块功能稳定且满足项目需求。</li>" +
        "</ul>" +
        "<p>在实习初期完成的成果：</p>" +
        "<ul>" +
        "    <li>通过调试外设接口，减少了开发时间约20%，显著提高了开发效率。</li>" +
        "    <li>优化某外设驱动代码逻辑，使系统响应速度提升了约15%。</li>" +
        "</ul>" +
        "<p>在后续工作中，将持续参与嵌入式软件的模块设计与集成，进一步提升在硬件与软件协同开发中的综合能力。</p>",
    ],
  ],

  /**
   * 这里填写你的其他经历
   * ["日期"， "经历"， "介绍"]
   * 建议填写您的校级及以上得奖经历或或其他证书
   */
  /**
   * 这里填写你的其他经历
   * ["日期"， "经历"， "介绍"]
   * 建议填写您的校级及以上得奖经历或其他证书
   */
  others: [
    [
      "2021/9 — 2022/1",
      "加入湘潭大学科协与学生开放实验室",
      "作为技术干事加入湘潭大学科协与学生开放实验室，参与校内多项技术创新活动，深入学习嵌入式开发与AI基础技术，协助完成3个实验室项目，展现较强的学习与实践能力。",
    ],

    [
      "2022/1 — 2022/6",
      "加入物联网创新实验室",
      "担任实验室核心成员，系统研究物联网边缘计算技术，参与智能家居数据采集平台设计，优化数据采集速率提升至95%，并协助实现实验室技术成果在校内智能楼宇场景中的小规模应用。",
    ],

    [
      "2022/9 — 2023/6",
      "担任学生开放实验室电子部副部长",
      "带领电子部团队优化嵌入式开发教学体系，开发嵌入式与实时操作系统的学习平台，累计培养20余名技术新人；通过重组实验室知识共享流程，使技术输出效率提升40%。",
    ],

    [
      "2023/3 — 2023/10",
      "主导植保精灵机器人项目",
      "担任电控负责人，主导机器人电控与路径规划设计，通过自研的传感器融合算法，将作业路径精度提升至±2cm；项目获<i>iCAN</i>省二等奖、挑战杯校二等奖、互联网+校三等奖、三维创新省一等奖，并取得外观设计专利，技术成果受到农业科技企业的高度关注。",
    ],

    [
      "2023/3 — 2024/6",
      "基于ChatGPT的数字人教辅系统项目负责人",
      "主导数字人教辅系统研发，以ChatGPT为核心构建智能教育平台，解决传统教育个性化学习难题。平台实现用户满意度超90%，并获国家级大创立项、挑战杯省银奖、中欧青年人工智能大赛、互联网＋等奖项，成功通过国家级结题验收，为教育科技行业智能化提供了可行的解决方案。",
    ],

    [
      "2024/3 — 2024/6",
      "完成水上莲藕收集机器人项目",
      "担任项目负责人，设计并实现适用于复杂水面环境的智能采集机器人。通过创新性的多传感器协同控制系统，将作业精准度提高至85%，同时降低系统运行功耗30%。项目荣获机器人与人工智能大赛国三、机创校一等奖、<i>iCAN</i>省三等奖，并取得发明专利。",
    ],

    [
      "2024/3 — 2024/6",
      "发表EI学术论文：大模型工业落地研究",
      "独立完成论文核心技术研究，提出针对工业场景的LLM微调优化方案和高效部署策略，解决大模型实际应用的关键瓶颈问题。论文在国际EI期刊发表，为工业智能化提供重要理论支撑。",
    ],

    [
      "2023/9 — 2024/6",
      "多项人工智能与计算机技术个人奖项",
      "凭借突出的AI算法开发与技术创新能力，斩获多项国内外AI与计算机算法比赛奖项，包括人工智能高级工程师认证（中国城商联），全面展现个人在技术研发与实践中的综合实力。",
    ],

    [
      "2024/7 — 2024/10",
      "获得国际荣誉博士称号与权威技术认证",
      "因在AI交叉研究领域的突破性成果，获多所国际知名高校授予荣誉博士称号；同时完成多项人工智能、物联网与嵌入式开发领域的高级认证，进一步巩固技术复合型人才定位。",
    ],

    [
      "2024/11 — 至今",
      "加入ITON公司并明确职业方向",
      "从众多offer中选择进入ITON公司担任嵌入式软件研发助理工程师，迅速掌握公司核心产品的嵌入式外设技术，完成包括智能硬件接口开发和底层通信协议设计在内的多项任务，着力探索AI与嵌入式系统的融合应用，为技术落地提供新思路。",
    ],
  ],

  /**
   * 在这里填写您的社交网络平台
   * ["img", "url", "desc"]
   * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
   * url是您链接
   * desc是一段描述，将鼠标移入将会显示该描述
   * 建议您放置数量 <= 5
   */
  icon: [
    [
      "./svg/LeetCode.svg",
      "https://leetcode.cn/u/xiang-da-xiao-ren-wu/",
      "我的力扣主页",
    ],
    ["./svg/github.svg", "https://github.com/TianMingXTU", "我的GitHub主页"],
    [
      "./svg/博客.svg",
      "https://blog.csdn.net/m0_64357419?spm=1000.2115.3001.5343",
      "我的个人博客",
    ],
  ],

  //这是一些图片链接，建议您仅更改第二个头像图片
  url: [
    //背景图、头像、作品展示背景、其他经历背景
    "./images/intro-bk.png",
    "./images/qhj.jpg",
    "./images/opus-bk.png",
    "./images/experience-bk.png",
  ],
};
