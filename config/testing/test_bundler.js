/**
 * Created by pheadra on 9/18/16.
 */
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())


/// TODO : 나중에 코드 최적화 필요. 일단 기찮아서..

const testsContext = require.context('../../app', true, /\.test\.(js)$/)
testsContext.keys().forEach(testsContext)
const testsContext2 = require.context('../../app', true, /\.test\.(jsx)$/)
testsContext2.keys().forEach(testsContext2)


const componentsContext = require.context('../../app', true, /^((?!main|router).)*\.jsx$/)
componentsContext.keys().forEach(componentsContext)
const componentsContext2 = require.context('../../app', true, /^((?!main|router).)*\.js$/)
componentsContext2.keys().forEach(componentsContext2)
