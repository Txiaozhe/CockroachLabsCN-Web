/**
 * config
 */

var path = require('path');

var host = 'www.txiaozhe.top';

var config = {
  // debug 为 true 时，用于本地调试
  debug: false,

  get mini_assets() { return !this.debug; }, // 是否启用静态文件的合并压缩，详见视图中的Loader

  name: 'Cockclub', // 社区名字
  description: 'Cockroach 中文社区论坛', // 社区的描述
  keywords: 'CockroachDB DB NewSQL',

  // 添加到 html head 中的信息
  site_headers: [
    '<meta name="author" content="EDP@TAOBAO" />'
  ],
  site_logo: 'https://' + host + '/public/images/cn-logo.png', // default is `name`
  site_icon: 'https://www.cockroachlabs.com/docs/images/favicon.png', // 默认没有 favicon, 这里填写网址
  // 右上角的导航区
  site_navs: [
    // 格式 [ path, title, [target=''] ]
    [ '/about', '关于' ]
  ],
  // cdn host，如 http://cnodejs.qiniudn.com
  site_static_host: '', // 静态文件存储域名
  // 社区的域名
  host: host,
  // 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  google_tracker_id: '',
  // 默认的cnzz tracker ID，自有站点请修改
  cnzz_tracker_id: '',

  // mongodb 配置
  db: 'mongodb://127.0.0.1/node_club_dev',

  // redis 配置，默认是本地
  redis_host: '127.0.0.1',
  redis_port: 6379,
  redis_db: 0,
  redis_password: '',

  session_secret: 'rvhbjnkmlnjkbhjvhgftxdfzsdzs', // 务必修改
  auth_cookie_name: 'CockroachClub CN',

  // 程序运行的端口
  port: 3001,

  // 话题列表显示的话题数量
  list_topic_count: 20,

  // RSS配置
  rss: {
    title: 'Cockroach 中文社区',
    link: 'https://www.cockroachlabs.com/',
    language: 'zh-cn',
    description: 'Cockroach 中文社区论坛',
    //最多获取的RSS Item数量
    max_rss_items: 50
  },

  log_dir: path.join(__dirname, 'logs'),

  // 邮箱配置
  mail_opts: {
    host: 'smtp.126.com',
    port: 465,
    auth: {
      user: 'cockroach_cn@126.com',
      pass: 'txj1269179099'
    },
    ignoreTLS: false
  },

  //weibo app key
  weibo_key: 10000000,
  weibo_id: 'your_weibo_id',

  // admin 可删除话题，编辑标签。把 user_login_name 换成你的登录名
  admins: { txiaozhe: true },

  // github 登陆的配置
  GITHUB_OAUTH: {
    clientID: '5404c84b7e78d6287226',
    clientSecret: '4549d05da5ddab75af44771f4ad38c40d55ab3eb',
    callbackURL: 'https://' + host + '/auth/github/callback'
  },
  // 是否允许直接注册（否则只能走 github 的方式）
  allow_sign_up: true,

  // oneapm 是个用来监控网站性能的服务
  oneapm_key: '',

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  qn_access: {
    accessKey: 'your access key',
    secretKey: 'your secret key',
    bucket: 'your bucket name',
    origin: 'http://your qiniu domain',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: 'http://xxxxxxxx'
  },

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  upload: {
    path: path.join(__dirname, 'public/upload/'),
    url: '/public/upload/'
  },

  file_limit: '1MB',

  // 版块
  tabs: [
    ['share', '分享'],
    ['ask', '问答'],
    ['job', '招聘']
  ],

  // 极光推送
  jpush: {
    appKey: 'YourAccessKeyyyyyyyyyyyy',
    masterSecret: 'YourSecretKeyyyyyyyyyyyyy',
    isDebug: false
  },

  create_post_per_day: 1000, // 每个用户一天可以发的主题数
  create_reply_per_day: 1000, // 每个用户一天可以发的评论数
  create_user_per_ip: 1000,
  visit_per_day: 1000 // 每个 ip 每天能访问的次数
};

if (process.env.NODE_ENV === 'test') {
  config.db = 'mongodb://127.0.0.1/node_club_test';
}

module.exports = config;