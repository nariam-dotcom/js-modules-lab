require('datejs');

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

function combineUsers (...args) {
  const combineObject = {
    users : []
  };


for (const array of args) {
  combineObject.users = [...combineObject.users, ...array];
}

combineObject.merge_date = Date.today().toString("M/d/yyyy");

 return combineObject;
} ;
