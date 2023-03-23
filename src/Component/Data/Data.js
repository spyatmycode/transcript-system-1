import React from 'react';

const data = [
  [
  {
    FACULTY: 'SCIENCE AND TECHNOLOGY',
    DEPARTMENT: 'HEALTH INFORMATION MANAGEMENT',
    LEVELS: [
        {
        100:[
             {
             SEMESTER:
             [
              {
                // 'FIRST SEMESTER'
                1:[
                 {
                COURSES:[
                  {
                    CODE: 'STA 102',
                    COURSETITLE: 'introduction to Statistics',
                    UNIT: 2,
                  },
                  {
                    CODE: 'MGT 403',
                    COURSETITLE: 'Quality Management',
                    UNIT: 3,
                  },
                  {
                    CODE: 'MGT 5503',
                    COURSETITLE: 'Quality Management',
                    UNIT: 3,
                  },
                ]
                }
                  ],


                // 'SECOND SEMESTER'
                2:[
                 {
                COURSES:[
                  {
                    CODE: 'FRN 2401',
                    COURSETITLE: 'Advanced French III',
                    UNIT: 2,
                  },
                  {
                    CODE: 'MGT 2403',
                    COURSETITLE: 'Quality Management',
                    UNIT: 3,
                  },
                  {
                    CODE: 'MGT 25503',
                    COURSETITLE: 'Quality Management',
                    UNIT: 3,
                  },
                ]
                }
                  ],
          
              },
       
             ]
             }
            ],
              200:[
             {
             SEMESTER:
             [
              {
                // 'FIRST SEMESTER'
                1:[
                 {
                COURSES:[
                  {
                    CODE: 'FRN 21401',
                    COURSETITLE: 'Advanced French III',
                    UNIT: 2,
                  },
                  {
                    CODE: 'MGT 4023',
                    COURSETITLE: 'Quality Management',
                    UNIT: 3,
                  },
                  {
                    CODE: 'MGT 55203',
                    COURSETITLE: 'Quality Management',
                    UNIT: 3,
                  },
                ]
                }
                  ],


                // 'SECOND SEMESTER'
                2:[
                 {
                COURSES:[
                  {
                    CODE: 'FRN 2401',
                    COURSETITLE: 'Advanced French III',
                    UNIT: 2,
                  },
                  {
                    CODE: 'MGT 2403',
                    COURSETITLE: 'Quality Management',
                    UNIT: 3,
                  },
                  {
                    CODE: 'MGT 25503',
                    COURSETITLE: 'Quality Management',
                    UNIT: 3,
                  },
                ]
                }
                  ],
          
              },
       
             ]
             }
            ],
// /........levels 
            
          },



        ]
      },


  
  ]
        
        




     // SEMESTER: [
    //   {
    //     NAME: 'FIRST SEMESTER',
    //     COURSES: [
    //       {
    //         CODE: 'FRN 401',
    //         COURSETITLE: 'Advanced French III',
    //         UNIT: 2,
    //       },
    //       {
    //         CODE: 'MGT 403',
    //         COURSETITLE: 'Quality Management',
    //         UNIT: 3,
    //       },
    //       {
    //         CODE: 'HIM 40',
    //         COURSETITLE: 'Health Database Design and Development',
    //         UNIT: 3,
    //       },
    //       {
    //         CODE: 'HIM 404',
    //         COURSETITLE: 'Health Information Department Management',
    //         UNIT: 3,
    //       },
    //       {
    //         CODE: 'ICT 405',
    //         COURSETITLE: 'Database Management',
    //         UNIT: 3,
    //       },
    //     ],
    //   },
    //   {
    //     NAME: 'SECOND SEMESTER',
    //     COURSES: [
    //       {
    //         CODE: 'FRN 421',
    //         COURSETITLE: 'Advanced French IV',
    //         UNIT: 2,
    //       },
    //       {
    //         CODE: 'GNS 422',
    //         COURSETITLE: 'Research Project',
    //         UNIT: 6,
    //       },
    //       {
    //         CODE: 'HIM 411',
    //         COURSETITLE: 'Health Science Research methods',
    //         UNIT: 3,
    //       },
    //       {
    //         CODE: 'HIM 413',
    //         COURSETITLE: 'Professional Development in HIM',
    //         UNIT: 3,
    //       },
    //       {
    //         CODE: 'ICT 415',
    //         COURSETITLE: 'Database Management',
    //         UNIT: 3,
    //       },
    //     ],
    //   },
    // ],
 
];

export default data;

// const data = [
//     { faculty: 'Faculty of Science', department: 'Mathematics', level: 300, semester: 'First', total_unit: 3 },
//     { faculty: 'Faculty of Engineering', department: 'Electrical Engineering', level: 200, semester: 'Second', total_unit: 4 },
//     { faculty: 'Faculty of Law', department: 'Commercial Law', level: 400, semester: 'Second', total_unit: 5 },
//     // more data...
//   ];
  
//   export default data;



// {row[0].LEVELS[0][100][0].COURSES.map((e)=>(