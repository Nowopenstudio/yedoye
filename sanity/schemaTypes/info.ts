import { join } from "path";


export default{
    name: 'info',type: 'document',title:'info',
    fieldsets:[{name:'img',options:{columns:2}}],
    fields:[
        {name:'name',type:'string',title:'Display Name'},
        {name:'titles',type:'string',title:'titles'},
        {name:'location',type:'string',title:'Location'},
        {name:'bio',type:'array',title:'Bio',of:[{type:'block'}]},

        {type:'array',name:'links',title:"Links",of:[{
            type:'object',name:'single',title:"Link",fields:[
                {type:'string',name:'title',title:'Title'},
                {type:'string',name:'label',title:'Label'},
                {type:'string',name:'link',title:'Link'}
                
            ]
        }]},
        {type:'array',name:'cv',title:"CV",of:[{
            type:'object',name:'single',title:"category",fields:[
                {type:'string',name:'title',title:'Title'},
                {type:'array',name:'items',title:'Items',of:[{
                    type:'object',name:'item',title:'item',fields:[
                        {name:'title',type:'string',title:'Title'},
                        {name:'year',type:'string',title:'Year'},
                        {name:'medium',type:'string',title:'Medium'},
                        {name:'sub',type:'string',title:'Sub'},
                    ]
                }]},
                
            ]
        }]},
        {type:'array',name:'media',title:"Media",of:[{
            type:'object',title:'Media',name:"oject",fields:[
            {type:'image',name:'image',title:"Image"},
            {type:'mux.video',title:'Video',name:"vid"}
                ],
                   preview: {
            select: {
              media:'image'
            }
          }

            }],
        }


    
    ]
       
}