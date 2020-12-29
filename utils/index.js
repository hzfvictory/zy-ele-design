/* 常用常量 */
export const PAGEPARAMS = {
  pageSize: 1000, //每页显示多少条
  pageNum: 1 //当前页数
};
export const STARTTIME = '00:00:00'
export const ENDTIME = '23:59:59'
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

/**
 * 捕获错误
 * @param  {function} promise 异步函数
 */
export const awaitWrap = (promise) => {
  return promise
    .then(data => [null, data])
    .catch(err => [err, null])
}
/**
 * 生成唯一id
 * @param  {number} length 数值越大重复的几率越低  用默认值即可
 */
export const genID = (length = 3) => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(16);
}

/**
 * 匹配邮箱
 * @param  {string} email 邮箱的url
 */
export function isEmail(email) {
  const reg = new RegExp('^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$');
  return reg.test(email);
}

/**
 * 匹配InternetURL
 * @param  {string} url InternetURL的url
 */
export function isInternetURL(url) {
  const reg = new RegExp('[a-zA-z]+://[^\\s]*');
  return reg.test(url);
}

/**
 * 查看文字的长度  一个文字抵两位数字
 * @param  {string} str InternetURL的url
 */
export const getBLen = (str) => {
  if (str == null) return 0;
  return str.replace(/[^\x00-\xff]/g, "aa").length;
};

/**
 * 数字千位一个逗号
 * @param  {number | string} num 要格式化的数字
 * @param  {number} val 保留几位小数 默认为2
 */
export const formatterNumber = (num, val = 2) => {
  if (Rules.thousandNumReg.test(num)) return num; // 如果后台已经转化为千分位，前端不做处理直接返回
  let nwe_num = parseFloat(num, 10); // 转数字操作
  if (isNaN(nwe_num)) return num; // 防止是NaN
  const [integer, decimal = ''] = nwe_num.toLocaleString().split('.');

  if (val === 0) return integer;
  return integer + '.' + decimal.padEnd(val, '0');
};

/* 正则 */
export const Rules = {
  thousandNumReg: /^(-)?\d{1,3}(,\d{3})+(.\d+)?$/,// 千分位正则
  phoneReg: /^1\d{10}$/,// 手机号正则
  emojiReg: /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f])|(\ud83d[\ude80-\udeff])/,// emoji表情的正则
}