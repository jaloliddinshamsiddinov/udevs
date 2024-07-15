import { v4 as uuidv4 } from "uuid";
import * as _dropdown from "/assets";
import * as _uiUx from "/assets/ui-ux";
import * as _optimization from "/assets/optimization";
import * as _itConsulting from "/assets/it-consulting";
import * as _delever from "/assets/delever";
import * as _smsUz from "/assets/smsuz";
import * as _gZ from "/assets/gz";
import * as _Iman from "/assets/iman";
import * as _Steaps from "/assets/steaps";

export const navigationLinks = [
  {
    id: 1,
    title: "Direction",
    route: "#Direction",
    option: false,
  },
  {
    id: uuidv4(),
    title: "Command",
    route: "#Command",
    option: false,
  },
  {
    id: uuidv4(),
    title: "Services",
    route: "#Services",
    option: true,
    dropDown: [
      {
        id: uuidv4(),
        title: "Development of mobile applications",
        img: _dropdown.DropDownSvg,
        route: "#Services",
      },
      {
        id: uuidv4(),
        title: "Development and implementation ERP systems",
        img: _dropdown.DropdownERP,
        route: "#erp",
      },
      {
        id: uuidv4(),
        title: "User interface, User experience design",
        img: _dropdown.Dropdownlayer,
        route: "#design",
      },
      {
        id: uuidv4(),
        title: "Optimization IT consulting infrastructure",
        img: _dropdown.DropDownConsulting,
        route: "#Optimization",
      },
      {
        id: uuidv4(),
        title: "IT consulting",
        img: _dropdown.DropDownIT,
        route: "#consulting",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Tools",
    route: "#Tools",
    option: false,
  },
  {
    id: uuidv4(),
    title: "Clients",
    route: "#Clients",
    option: false,
  },
  {
    id: uuidv4(),
    title: "Portfolio",
    route: "#delever",
    option: true,
    dropDown: [
      {
        id: uuidv4(),
        title: "Delever",
        route: "#delever",
        img: _dropdown.DropDownDelever,
      },
      {
        id: uuidv4(),
        title: "Sms.uz",
        route: "#smsuz",
        img: _dropdown.DropDownSms,
      },
      {
        id: uuidv4(),
        title: "Goodzone",
        route: "#goodzone",
        img: _dropdown.DropDownGdZone,
      },
      {
        id: uuidv4(),
        title: "Iman",
        route: "#iman",
        img: _dropdown.DropDownIman,
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Language",
    route: false,
    option: true,
    dropDown: [
      {
        id: uuidv4(),
        title: "Рус",
        img: _dropdown.Rus,
      },
      {
        id: uuidv4(),
        title: "Eng",
        img: _dropdown.Eng,
      },
    ],
  },
];

export const _ourServiceData = [
  {
    id: uuidv4(),
    title: "Development of mobile applications",
    img: "/assets/our-service/team.svg",
  },
  {
    id: uuidv4(),
    title: "Development and implementation ERP systems",
    img: "/assets/our-service/phone.svg",
  },
  {
    id: uuidv4(),
    title: "User interface, User experience design",
    img: "/assets/our-service/erp.svg",
  },
  {
    id: uuidv4(),
    title: "Optimization IT consulting infrastructure",
    img: "/assets/our-service/design.svg",
  },
  {
    id: uuidv4(),
    title: "IT consulting",
    img: "/assets/our-service/consulting.svg",
  },
  {
    id: uuidv4(),
    title: "IT consulting",
    img: "/assets/our-service/it-consulting.svg",
  },
];

export const uxUi = [
  {
    title: "UX",
    icon: _uiUx.UxIcon,
  },
  {
    title: "UI",
    icon: _uiUx.UiIcon,
  },
  {
    title: "Prototyping",
    icon: _uiUx.PrototypingIcon,
  },
  {
    title: "Mobile Design",
    icon: _uiUx.MobileIcon,
  },
  {
    title: "Web Design",
    icon: _uiUx.WebIcon,
  },
  {
    title: "Atomic Design",
    icon: _uiUx.AtomicIcon,
  },
];

export const uxUiTechnologies = [
  {
    name: "Figma",
    icon: _uiUx.FigmaIcon,
  },
  {
    name: "Sketch",
    icon: _uiUx.SketchIcon,
  },
  {
    name: "Lottie",
    icon: _uiUx.LottieIcon,
  },
  {
    name: "Illustrator",
    icon: _uiUx.IllustratorIcon,
  },
];

export const optimization_data = {
  id: uuidv4(),
  title: "Optimization Infrastructure",
  bgImg: "/assets/bg-phone.png",
  img: /assets/optimization/optimizationDesctop.png",
  alt: "optimization img",
  descr:
    "Our experienced professionals will help you optimize your infrastructure",
  data: [
    {
      id: uuidv4(),
      title: "Architecture",
      icon: _optimization.ArchitectureIcon,
    },
    {
      id: uuidv4(),
      title: "Auto testing",
      icon: _optimization.AutoTestingIcon,
    },
    {
      id: uuidv4(),
      title: "Stress testing",
      icon: _optimization.StressTestingIcon,
    },
    {
      id: uuidv4(),
      title: "Load testing",
      icon: _optimization.LoadTestingIcon,
    },
    {
      id: uuidv4(),
      title: "Devops",
      icon: _optimization.DevopsIcon,
    },
    {
      id: uuidv4(),
      title: "Cloud",
      icon: _optimization.CloudIcon,
    },
    {
      id: uuidv4(),
      title: "CI / CD",
      icon: _optimization.CiCdIcon,
    },
  ],
};

export const itConsDta = {
  id: uuidv4(),
  title: "IT consulting",
  bgImg: "",
  img: /assets/it-consulting/consulting.png",
  alt: "it consulting img",
  descr:
    "We can improve the qualifications of your employees thereby increasing the efficiency of your company",
  data: [
    {
      id: uuidv4(),
      title: "Frontend",
      icon: _itConsulting.FrontendIcon,
    },
    {
      id: uuidv4(),
      title: "Backend",
      icon: _itConsulting.BackendIcon,
    },
    {
      id: uuidv4(),
      title: "Architecture",
      icon: _optimization.ArchitectureIcon,
    },
    {
      id: uuidv4(),
      title: "Devops",
      icon: _optimization.DevopsIcon,
    },
    {
      id: uuidv4(),
      title: "UX/UI",
      icon: _itConsulting.UxUiLayerIcon,
    },
    {
      id: uuidv4(),
      title: "QA",
      icon: _itConsulting.QaIcon,
    },
  ],
};

export const _tools = {
  id: uuidv4(),
  title: "Tools",
  radio: [
    {
      id: uuidv4(),
      type: "Frontend",
      name: "Frontend",
    },
    {
      id: uuidv4(),
      type: "Backend",
      name: "Backend",
    },
    {
      id: uuidv4(),
      type: "Devops",
      name: "Devops",
    },
    {
      id: uuidv4(),
      type: "Testing",
      name: "Testing",
    },
    {
      id: uuidv4(),
      type: "UX_UI",
      name: "UX/UI",
    },
    {
      id: uuidv4(),
      type: "Infrastructure",
      name: "Infrastructure",
    },
    {
      id: uuidv4(),
      type: "Mobile",
      name: "Mobile",
    },
  ],
  data: [
    {
      id: uuidv4(),
      title: "Promotheus",
      iconPath: "/assets/tools/Promotheus.svg",
      bgColor: "bg-Devops",
      type: "Devops",
    },
    {
      id: uuidv4(),
      title: "Loki",
      iconPath: "/assets/tools/Loki.svg",
      bgColor: "bg-Devops",
      type: "Devops",
    },
    {
      id: uuidv4(),
      title: "Bitbucket",
      iconPath: "/assets/tools/Bitbucket.svg",
      bgColor: "bg-Devops",
      type: "Devops",
    },
    {
      id: uuidv4(),
      title: "Gitlab",
      iconPath: "/assets/tools/Gitlab.svg",
      bgColor: "bg-Devops",
      type: "Devops",
    },
    {
      id: uuidv4(),
      title: "Kotlin",
      iconPath: "/assets/tools/Kotlin.svg",
      bgColor: "bg-Mobile",
      type: "Mobile",
    },
    {
      id: uuidv4(),
      title: "Android",
      iconPath: "/assets/tools/Android.svg",
      bgColor: "bg-Mobile",
      type: "Mobile",
    },
    {
      id: uuidv4(),
      title: "Java",
      iconPath: "/assets/tools/Java.svg",
      bgColor: "bg-Mobile",
      type: "Mobile",
    },
    {
      id: uuidv4(),
      title: "Azure",
      iconPath: "/assets/tools/Azure.svg",
      bgColor: "bg-Infrastructure",
      type: "Infrastructure",
    },
    {
      id: uuidv4(),
      title: "GCP",
      iconPath: "/assets/tools/GCP.svg",
      bgColor: "bg-Infrastructure",
      type: "Infrastructure",
    },
    {
      id: uuidv4(),
      title: "DigitalOcean",
      iconPath: "/assets/tools/DigitalOcean.svg",
      bgColor: "bg-Infrastructure",
      type: "Infrastructure",
    },
    {
      id: uuidv4(),
      title: "AWS",
      iconPath: "/assets/tools/AWS.svg",
      bgColor: "bg-Infrastructure",
      type: "Infrastructure",
    },
    {
      id: uuidv4(),
      title: "Kubernetes",
      iconPath: "/assets/tools/Kubernetes.svg",
      bgColor: "bg-Infrastructure",
      type: "Infrastructure",
    },
    {
      id: uuidv4(),
      title: "ELK",
      iconPath: "/assets/tools/ELK.svg",
      bgColor: "bg-Devops",
      type: "Devops",
    },
    {
      id: uuidv4(),
      title: "Grafana",
      iconPath: "/assets/tools/Grafana.svg",
      bgColor: "bg-Devops",
      type: "Devops",
    },
    {
      id: uuidv4(),
      title: "Terraform",
      iconPath: "/assets/tools/Terraform.svg",
      bgColor: "bg-Devops",
      type: "Devops",
    },
    {
      id: uuidv4(),
      title: "IOS",
      iconPath: "/assets/tools/IOS.svg",
      bgColor: "bg-Mobile",
      type: "Mobile",
    },
    {
      id: uuidv4(),
      title: "Swift",
      iconPath: "/assets/tools/Swift.svg",
      bgColor: "bg-Mobile",
      type: "Mobile",
    },
    {
      id: uuidv4(),
      title: "Flutter",
      iconPath: "/assets/tools/Flutter.svg",
      bgColor: "bg-Mobile",
      type: "Mobile",
    },
    {
      id: uuidv4(),
      title: "Next.JS",
      iconPath: "/assets/tools/NextJS.svg",
      bgColor: "bg-Frontend",
      type: "Frontend",
    },
    {
      id: uuidv4(),
      title: "React.JS",
      iconPath: "/assets/tools/ReactJs.svg",
      bgColor: "bg-Frontend",
      type: "Frontend",
    },
    {
      id: uuidv4(),
      title: "Javascript",
      iconPath: "/assets/tools/Javascript.svg",
      bgColor: "bg-Frontend",
      type: "Frontend",
    },
    {
      id: uuidv4(),
      title: "Balsamic",
      iconPath: "/assets/tools/Balsamic.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
    {
      id: uuidv4(),
      title: "Invision",
      iconPath: "/assets/tools/Invision.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
    {
      id: uuidv4(),
      title: "Figma",
      iconPath: "/assets/tools/Figma.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
    {
      id: uuidv4(),
      title: "Docker",
      iconPath: "/assets/tools/Docker.svg",
      bgColor: "bg-Devops",
      type: "Devops",
    },
    {
      id: uuidv4(),
      title: "PostgreSQL",
      iconPath: "/assets/tools/PostgreSQL.svg",
      bgColor: "bg-Backend",
      type: "Backend",
    },
    {
      id: uuidv4(),
      title: "Python",
      iconPath: "/assets/tools/Python.svg",
      bgColor: "bg-Backend",
      type: "Backend",
    },
    {
      id: uuidv4(),
      title: "Node.JS",
      iconPath: "/assets/tools/NodeJs.svg",
      bgColor: "bg-Backend",
      type: "Backend",
    },
    {
      id: uuidv4(),
      title: "PHP",
      iconPath: "/assets/tools/PHP.svg",
      bgColor: "bg-Backend",
      type: "Backend",
    },
    {
      id: uuidv4(),
      title: "PHP",
      iconPath: "/assets/tools/GO.svg",
      bgColor: "bg-Backend",
      type: "Backend",
    },
    {
      id: uuidv4(),
      title: "Ant Design",
      iconPath: "/assets/tools/AntDesign.svg",
      bgColor: "bg-Frontend",
      type: "Frontend",
    },
    {
      id: uuidv4(),
      title: "Gatsby.JS",
      iconPath: "/assets/tools/GatsbyJS.svg",
      bgColor: "bg-Frontend",
      type: "Frontend",
    },
    {
      id: uuidv4(),
      title: "Vue.JS",
      iconPath: "/assets/tools/VueJs.svg",
      bgColor: "bg-Frontend",
      type: "Frontend",
    },
    {
      id: uuidv4(),
      title: "Principle",
      iconPath: "/assets/tools/Principle.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
    {
      id: uuidv4(),
      title: "Sketch",
      iconPath: "/assets/tools/Sketch.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
    {
      id: uuidv4(),
      title: "Adobe suite",
      iconPath: "/assets/tools/AdobeSuite.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
    {
      id: uuidv4(),
      title: "YouTrack",
      iconPath: "/assets/tools/YouTrack.svg",
      bgColor: "bg-Testing",
      type: "Testing",
    },
    {
      id: uuidv4(),
      title: "Appium",
      iconPath: "/assets/tools/Appium.svg",
      bgColor: "bg-Testing",
      type: "Testing",
    },
    {
      id: uuidv4(),
      title: "Cypress",
      iconPath: "/assets/tools/Cypress.svg",
      bgColor: "bg-Testing",
      type: "Testing",
    },
    {
      id: uuidv4(),
      title: "Jmeter",
      iconPath: "/assets/tools/Jmeter.svg",
      bgColor: "bg-Testing",
      type: "Testing",
    },
    {
      id: uuidv4(),
      title: "MongoDB",
      iconPath: "/assets/tools/MongoDB.svg",
      bgColor: "bg-Backend",
      type: "Backend",
    },
    {
      id: uuidv4(),
      title: "Cassandra",
      iconPath: "/assets/tools/Cassandra.svg",
      bgColor: "bg-Backend",
      type: "Backend",
    },
    {
      id: uuidv4(),
      title: "Sass",
      iconPath: "/assets/tools/Sass.svg",
      bgColor: "bg-Frontend",
      type: "Frontend",
    },
    {
      id: uuidv4(),
      title: "Material UI",
      iconPath: "/assets/tools/MaterialUi.svg",
      bgColor: "bg-Frontend",
      type: "Frontend",
    },
    {
      id: uuidv4(),
      title: "Zeplin",
      iconPath: "/assets/tools/Zeplin.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
    {
      id: uuidv4(),
      title: "Illustrator",
      iconPath: "/assets/tools/Illustrator.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
    {
      id: uuidv4(),
      title: "Lottie",
      iconPath: "/assets/tools/Lottie.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
    {
      id: uuidv4(),
      title: "Photoshop",
      iconPath: "/assets/tools/Photoshop.svg",
      bgColor: "bg-UX_UI",
      type: "UX_UI",
    },
  ],
};

export const _deleverData = {
  id: uuidv4(),
  title_icon: _delever.delever,
  option: {
    icon: _delever.delever_car,
    bgColor: "bg-[#ff572233]",
    color: "text-[#FF5722]",
    title: "Delivery",
  },
  bg_img: "/assets/bg.png",
  img: "/assets/delever/delever_app.png",
  descr:
    "Delever - Delivery service automation targeted at both consumers and restaurants.",
  question: "What we did?",
  route: "delever",
  data: [
    {
      id: uuidv4(),
      icon: _delever.Website,
      title: "Website",
    },
    {
      id: uuidv4(),
      icon: _delever.Admin_panel,
      title: "Admin panel",
    },
    {
      id: uuidv4(),
      icon: _delever.Crossplatform,
      title: "Crossplatform",
    },
    {
      id: uuidv4(),
      icon: _delever.Web_design,
      title: "Web design",
    },
    {
      id: uuidv4(),
      icon: _delever.Mobile_design,
      title: "Mobile design",
    },
  ],
};

export const _smsuz = {
  id: uuidv4(),
  title_icon: _smsUz.smsuz,
  option: {
    icon: _smsUz.sms_icon,
    bgColor: "bg-[#4473e533]",
    color: "text-[#4473e5]",
    title: "Notification",
  },
  bg_img: "/assets/bg.png",
  img: "/assets/smsuz/smsuz_app.png",
  descr: "Smsuz.uz - It is a platform for bulk SMS messaging.",
  question: "What we did?",
  route: "smsuz",
  data: [
    {
      id: uuidv4(),
      icon: _delever.Website,
      title: "Website",
    },
    {
      id: uuidv4(),
      icon: _delever.Admin_panel,
      title: "Admin panel",
    },
    {
      id: uuidv4(),
      icon: _delever.Crossplatform,
      title: "Crossplatform",
    },
  ],
};

export const _gz = {
  id: uuidv4(),
  title_icon: _gZ.gz_Png,
  option: {
    icon: _gZ.gz_icn,
    bgColor: "bg-[#f5000033]",
    color: "text-[#f50000]",
    title: "E-Commerce",
  },
  bg_img: "/assets/bg.png",
  img: _gZ.gz_App,
  descr: "Goodzone - Internet shop of household appliances in Uzbekistan.",
  question: "What we did?",
  route: "goodzone",
  data: [
    {
      id: uuidv4(),
      icon: _delever.Website,
      title: "Website",
    },
    {
      id: uuidv4(),
      icon: _delever.Admin_panel,
      title: "Admin panel",
    },
    {
      id: uuidv4(),
      icon: _delever.Crossplatform,
      title: "Crossplatform",
    },
    {
      id: uuidv4(),
      icon: _delever.Web_design,
      title: "Web design",
    },
    {
      id: uuidv4(),
      icon: _delever.Mobile_design,
      title: "Mobile design",
    },
  ],
};

export const _iman = {
  id: uuidv4(),
  title_icon: _Iman.iman,
  option: {
    icon: _Iman.iman_icon,
    bgColor: "bg-[#01cab033]",
    color: "text-[#01cab0]",
    title: "Finance",
  },
  bg_img: "/assets/bg.png",
  img: _Iman.imanApp,
  descr:
    "Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.",
  question: "What we did?",
  route: "iman",
  data: [
    {
      id: uuidv4(),
      icon: _delever.Website,
      title: "Website",
    },
    {
      id: uuidv4(),
      icon: _delever.Admin_panel,
      title: "Admin panel",
    },
    {
      id: uuidv4(),
      icon: _delever.Crossplatform,
      title: "Crossplatform",
    },
  ],
};

export const _steaps = {
  id: uuidv4(),
  title: "How we work!",
  route: "steaps",
  img: _Steaps.steap_dot,
  data: [
    {
      id: uuidv4(),
      title: "Сontact",
      descr: "Send us your project request or project idea.",
      icon: _Steaps.Contact,
    },
    {
      id: uuidv4(),
      title: "Analysis",
      descr: "We will contact you to clarify your project requirements.",
      icon: _Steaps.Analysis,
    },
    {
      id: uuidv4(),
      title: "Offer",
      descr: "We will provide you with our free, non-binding application.",
      icon: _Steaps.Offer,
    },
    {
      id: uuidv4(),
      title: "Team",
      descr: "We provide a team for your requirements.",
      icon: _Steaps.Team,
    },
    {
      id: uuidv4(),
      title: "Start",
      descr: "You will get to know the team and we'll get started..",
      icon: _Steaps.Start,
    },
  ],
};
