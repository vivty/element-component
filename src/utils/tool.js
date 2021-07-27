const requiredRule = (message, trigger) => {
  return [{ required: true, message, trigger: trigger || 'blur' }];
};

// const requiredSpaceRule = (name, trigger) => {
//   var formName = name;
//   const checkSpace = (rule, value, callback) => {
//     if (!value) {
//       return callback(new Error(`${name}不能为空`));
//     } else if (/(^\s+)|(\s+$)|\s+/g.test(value)) {
//       return callback(new Error(`${name}不能包含空格`));
//     } else {
//       callback();
//     }
//   };
//   return [{ required: true, validator: checkSpace, trigger: trigger || 'blur' }];
// };

const SearchItem = (prop, label, component, bind, itemConfig) => {
  return { prop, label, component, bind: { ...bind }, itemConfig: { ...itemConfig } };
};
export { requiredRule, SearchItem };
