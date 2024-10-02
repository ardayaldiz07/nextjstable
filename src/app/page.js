'use client'

import NEXTTABLE from '../components/table';
export default function Home() {
  return (
    <NEXTTABLE
      api={'https://apiv2.haberturk.com/api/v1/tummansetler'}

      apiBasePath={'body.content.items'}

      data={[]}

      search={{
        'enabled': true,
        'fields': [
          'newsId','title','spot'
        ],
      }}

      filter={{
        'enabled': true,
        'items': [
          'Gündem', 'Ekonomi', 'Dünya'
        ],
      }}

      columns={
        [
          { field: 'newsId', text: 'ID' , sort:true, sorted:true},
          { field: 'title', text: 'Başlık', sort:true, },
          { field: 'category.items', sort:true, text: 'Kategori', splitField: 'name', splitBy: '/' },
          { field: 'spot', text: 'Spot', sort:true }
        ]
      }

      itemPerPage={5}

      pagination={true}
      
      usePage={false}

      pageOptions={
        [
          {text:'5', value:5},
          {text:'10', value:10},
          {text:'20', value:20},
          {text:'30', value:30},
          {text:'40', value:40},
          {text:'50', value:50}
        ]
      }
    />
  );
}
