import {
  noYard,
  needsWork,
  landscaped,
  sparse
 } from '../assets'


const yardData = [
  {
    header: 'No yard',
    number: 1,
    content: 'Condo or townhome unit with no yard',
    background: noYard
  },
  {
    header: 'No landscaping',
    number: 2,
    content: 'Dirt or gravel yard with little to no greenery',
    background: needsWork
  },
  {
    header: 'Sparse landscaping',
    number: 3,
    content: 'Greenery is sparse and needs touch ups',
    background: sparse
  },
  {
    header: 'Lush landscaping',
    number: 4,
    content: 'Lush greenery that or well maintained patio',
    background: landscaped
  }
]

export default yardData
