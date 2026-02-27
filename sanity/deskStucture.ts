import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list';
export const myStructure = (S:any,context:any) =>
    S.list()
      .title('Content')
      .items([
        orderableDocumentListDeskItem({type: 'shows',title: 'shows', S, context}),
        orderableDocumentListDeskItem({type: 'ideas',title: 'Ideas', S, context}),
        orderableDocumentListDeskItem({type: 'recordings',title: 'Recordings', S, context}),

        // S.listItem()
        // .title('Homepage')
        // .child(S.document().title("Homepage").schemaType('homepage').documentId('homepage')),
        S.listItem()
            .title('Info')
            .child(S.document().title("Info").schemaType('info').documentId('info')),
        S.listItem()
            .title('Home')
            .child(S.document().title("Home").schemaType('home').documentId('home')),
        // S.listItem()
        //     .title('Settings')
        //     .child(S.document().title("Settings").schemaType('settings').documentId('settings')),

        

        
  
          ...S.documentTypeListItems().filter(listItem => !['info','shows','recordings','ideas','home','mux.videoAsset'].includes(listItem.getId())),
  
        
    
    
  ])