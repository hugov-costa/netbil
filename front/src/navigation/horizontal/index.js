// ** Navigation imports
import adm from './adm'
import apps from './apps'
import pages from './pages'
import others from './others'
import charts from './charts'
import general from './general'
import uiElements from './ui-elements'
import formsAndTables from './forms-tables'
import home from './home'

// ** Merge & Export
export default [...home, ...adm, ...general, ...apps, ...uiElements, ...formsAndTables, ...pages, ...charts, ...others]
