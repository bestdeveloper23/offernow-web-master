import {
  greatCondition,
  needsPaintWork,
  typicalUse
 } from '../assets'


const paintData = [
  {
    header: 'Needs work',
    number: 1,
    content: 'Visible issues like scratches, scuffs, and holes in the walls.',
    background: needsPaintWork
  },
  {
    header: 'Average condition',
    number: 2,
    content: 'Some scratches and scuffs, but nothing major.',
    background: typicalUse
  },
  {
    header: 'Looks brand new',
    number: 3,
    content: 'There are no visible issues.',
    background: greatCondition
  }
]

export default paintData
