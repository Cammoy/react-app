import VARS from '../../vars';
var styles = {

  sectionHeading: {
    backgroundColor:VARS.COLOR.g1,
    fontSize: 18,
    paddingTop:8,
    paddingBottom:8,
    color:VARS.COLOR.g4,
    //textAlign:'center',
    paddingLeft:15
  },

  swiper: {
  },

  itemWrap: {
    borderBottomWidth: 1,
    borderBottomColor:'#EEE',
  },
  item: {
    flexDirection: 'row',
    //justifyContent:'space-between',
    marginTop:5,
    paddingTop:5,
    paddingBottom:5
  },
  right: {
    alignItems:'flex-start',
    paddingLeft:10
  },
  category:{
    color:'red',
  },
  moreInfo: {
    fontSize:16,
    padding:2,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'rgba(300, 0, 0, 0.8)',
    color:VARS.COLOR.g4,
  },
  actions: {
    bottom:0,
    flexDirection: 'row',
    justifyContent:'center',
    marginTop:5
  }
}

export default styles;
