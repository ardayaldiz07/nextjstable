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
    />
  );
}
