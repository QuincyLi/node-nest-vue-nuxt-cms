// 生产环境配置
export default () => ({
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'nest_cms_api',
    synchronize: false,
  },
});
