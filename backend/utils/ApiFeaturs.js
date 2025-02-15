class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  /* Search */
  search() {

    function containsOnlyNumbers(str) {
      return /^\d+$/.test(str);
    }

    // const copyObject = (obj) => {
    //   let result = {};
    //   Object.entries(obj).forEach(([key, value]) => {
    //     result[key] = value;
    //   });
    //   return result;
    // };

    // let rollNumber = copyObject(this.queryStr);

    // if(!containsOnlyNumbers(this.queryStr.keyword)){
    //   rollNumber.keyword = null;
    // }
    
    // console.log(rollNumber.keyword);
    // if (rollNumber) {
    // }
    // console.log(Number(this.queryStr.keyword));

    // let rollNo;
    // if(!containsOnlyNumbers(this.queryStr.keyword)){
    //     rollNo = null
    // }else{
    //   rollNo = Number(this.queryStr.keyword);
    // }

    // console.log(rollNo);
    
    // const keyword = this.queryStr.keyword
    //   ? {
    //       $or: [
    //         { name: { $regex: this.queryStr.keyword, $options: "i" } },
    //         { rollNo: rollNumber.keyword },
    //       ],
    //     }
    //   : {};

    // console.log(this.queryStr.keyword);
    let rollNumber = Number(this.queryStr.keyword);

    if (!containsOnlyNumbers(this.queryStr.keyword)) {
      rollNumber = undefined;
    }
    // if()
    // console.log(Number(this.queryStr.keyword));
    const keyword = this.queryStr.keyword
      ? {
          $or: [
            { name: { $regex: this.queryStr.keyword, $options: "i" } },
            { rollNo: rollNumber },
          ],
        }
      : {};


    this.query = this.query.find({ ...keyword });
    return this;
  }

  /* Seach on the Basis of Branch */
  searchBranch(){
    const Branch = this.queryStr.branchName ? {
      branchName : this.queryStr.branchName
    } : {};
    

    this.query = this.query.find({ ...Branch });
    return this;
  }

  /* Filters */
  filter(){
    const copyQueryStr = {...this.queryStr};
    const removeFeilds = ["keyword"];

    removeFeilds.forEach( (key) => delete copyQueryStr[key]);

    /* Filtering for price and rating */
    // console.log(copyQueryStr);
    copyQueryStr = JSON.stringify(copyQueryStr);
    // console.log(copyQueryStr);
    copyQueryStr = copyQueryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    // console.log(copyQueryStr);
    copyQueryStr = JSON.parse(copyQueryStr);
    // console.log(copyQueryStr);

    this.query = this.query.find(queryCopy);

    return this;
  }
}
module.exports = ApiFeatures;
