// this category of employees is considered as assumed like both ac and non ac rooms this is applicable when bot ac and non ac are there 
// module.exports={
//     CSIR_EMPLOYEE:{
//         label:"CSIR Employee,Pensioners and their dependant Family members",
//         AC:100,
//         NON_AC:80,
//     },
//     PROJECT_FELLOW:{
//         label:"Project Fellows, JRF/SRF/RA, Research Students,Scholars working in CSIR Labs/Hqrs",
//         AC:100,
//         NON_AC:80,
//     },
//     NON_DEPENDANT_FAMILY:{
//         label:"Non-dependant family members of CSIR employees/pensioners",
//         AC:200,
//         NON_AC:160,
//     },
//     OFFICIAL_EXPERT:{
//         label:"Non official/expert members invited for CSIR work",
//         AC:200,
//         NON_AC:160,
//     },
//     ASI_PSU_EMPLOYEE:{
//         label:"Serving employees of AcSIR/PSU's of DSIR (Official Purpose)",
//         AC:300,
//         NON_AC:240,
//     },
//     OTHER_GUEST:{
//         label:"Non CSIR/Other Guests",
//         AC:600,
//         NON_AC:500
//     },
//     NRI_FOREIGN:{
//         label:"NRI/Foreign Guests",
//         AC:2500,
//         NON_AC:2000
//     }
// }

// code developed on 15-02-2026 as per new data and now we take only ac rooms price as all the rooms present in GH are ac and data is given by GH team
module.exports = {
    CSIR_EMPLOYEE: {
        label: "CSIR Employee, Pensioners and their dependant Family members",
        rate: 100
    },

    PROJECT_FELLOW: {
        label: "Project Fellows, JRF/SRF/RA, Research Students, Scholars working in CSIR Labs/Hqrs",
        rate: 100
    },

    NON_DEPENDANT_FAMILY: {
        label: "Non-dependant family members of CSIR employees/pensioners",
        rate: 200
    },

    OFFICIAL_EXPERT: {
        label: "Non official/expert members invited for CSIR work",
        rate: 200
    },

    ASI_PSU_EMPLOYEE: {
        label: "Serving employees of AcSIR/PSU's of DSIR (Official Purpose)",
        rate: 300
    },

    OTHER_GUEST: {
        label: "Non CSIR/Other Guests",
        rate: 600
    },

    NRI_FOREIGN: {
        label: "NRI/Foreign Guests",
        rate: 2500
    }
};
