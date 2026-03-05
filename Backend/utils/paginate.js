const paginate=async(model,query={},options={})=>{
    const page=parseInt(options.page) ||1;
    const limit=parseInt(options.limit) ||10;

    const skip=(page-1)*limit;
    const totalRecords=await model.countDocuments(query);

    const data=await model.find(query)
    .sort(options.sort || {createdAt:-1})
    .skip(skip)
    .limit(limit);

    return{
        data,
        currentPage:page,
        totalPages:Math.ceil(totalRecords/limit),
        totalRecords
    };

};

module.exports=paginate;