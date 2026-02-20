export default {
    name:"ideas",
    type:"document",
    title:'Ideas',
   groups:[{
        name: 'infoSet',
        title: 'Info',
        options: { columns: 2 },
      }],
    fields:[
        {
            type:"object",
            name:"cover",
            title:'Cover',
            fields:[
                
                    {
                        name:"image",
                        type:'image',
                        title:"file"
                    },
                    {
                        name:"video",
                        type:'mux.video',
                        title:"Video"
                    }
                
            ]

        },
        {
            type:'string',
            name:'title',
            title:'Title',
        },
        {
            type:'slug',
            name:'slug',
            title:'Slug',
            group:'infoSet',
            options:{
                source:'title'
            }

        },
         {
                        type:'array',
                        name:'content',
                        title:'Content',
                        of:[
                                {name:'single', title:"Single", type:"object",fields:[
                                {name:'content',title:'Type', type:'string',initialValue:'text',options: {
                                    list: [
                                    {title: 'Text', value: 'text'},
                                    {title: 'Image', value: 'image'},
                                    {title:'Image Gallery', value:"gallery"},
                                     {title: 'Video', value: 'video'}
                                    ],

                                    
                                }},
                                {name:'text',title:'Text',type:'array',of:[{type:'block'}], hidden: ({ parent }:any) => parent?.content !== "text"},
                                {name:'image',title:'Image',type:'image', hidden: ({ parent }:any) => parent?.content !== "image"},
                                {name:'gallery',title:'Image Gallery',type:'array', hidden: ({ parent }:any) => parent?.content !== "gallery",of:[{type:'image', name:'image',title:'Image'}]},
                                {name:'vid',title:'Video',type:'mux.video', hidden: ({ parent }:any) => parent?.content !== "video"},
                            ]}
                        ]
                    },
         {
            name:"orderRank",type:"string",title:"Rank"
        }
       
    ]
}