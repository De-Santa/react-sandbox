import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SE_AppLayout from '../components/SE_AppLayout'
import { openMenu, closeMenu } from '../store/entities/SE_AppLayout/actions'


function mapStateToProps (state) {
  return {
    isMenuOpened: state.SE_AppLayout.isMenuOpened,
  }
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({openMenu, closeMenu}, dispatch);
  return {...actions};
}

export default connect(mapStateToProps, mapDispatchToProps)(SE_AppLayout);