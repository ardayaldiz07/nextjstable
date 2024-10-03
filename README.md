# NEXTTABLE Component

`NEXTTABLE` is a component used for dynamic data display. It fetches data from an API, provides filtering and search features, and implements pagination.

## Features

- **API Integration**: Fetches data from the specified API.
- **Search Functionality**: Allows users to search within specific fields.
- **Filtering**: Filters data based on specific categories.
- **Sorting**: Provides multiple options to sort the table data.
- **Pagination**: Allows users to view data split across multiple pages.

## Usage

You need to pass the required props when using the component. Below is an example:

```html <NEXTTABLE
  api={'exampleapi'}
  apiBasePath={'example.body.items'}
  search={{
    enabled: true,
    fields: ['exapmleId', 'exampleTitle', 'spot'],
  }}
  filter={{
    enabled: true,
    items: ['Example1', 'Example2', 'Example3'],
  }}
  columns={[
    { field: '', order: true, text: 'Row' }, <!-- use it if you want !-->
    { field: 'newsId', text: 'ID', sort: true, sorted: true },
    { field: 'title', text: 'Title', sort: true },
    { field: 'category.items', sort: true, text: 'Category', splitField: 'name', splitBy: '/' },
    { field: 'spot', text: 'Spot', sort: true },
  ]}
  itemPerPage={5}
  pagination={true}
  usePage={true}
  pageOptions={[
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: '20', value: 20 },
    { text: '30', value: 30 },
    { text: '40', value: 40 },
    { text: '50', value: 50 },
  ]}
/>
