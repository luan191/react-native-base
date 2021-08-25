import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import * as texts from '../constants/Texts'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import * as messageActions from 'actions/common'
import { bindActionCreators } from 'redux'
import { appReducer } from 'reducers'

type AppState = ReturnType<typeof appReducer>

interface Props {
  title: string
  content: string
  messageActions: any
  showMessageDialog: boolean
}

class MessageDialog extends Component<Props> {
  handleAgree = () => {
    this.props.messageActions.dismissMessage()
  }

  render() {
    const { title, content } = this.props
    return (
      <Modal
        isVisible={this.props.showMessageDialog}
        animationIn="fadeIn"
        animationOut="fadeOut">
        <View style={styles.container}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>
              {title || texts.defaultMessageTitle}
            </Text>
          </View>
          <Text style={styles.contentText}>
            {content || texts.defaultMessageContent}
          </Text>
          <View style={styles.footerView}>
            <TouchableOpacity
              onPress={this.handleAgree}
              style={styles.agreeView}>
              <Text style={styles.agreeText}>
                {texts.defaultMessageRightBtn}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  messageActions: bindActionCreators(messageActions, dispatch)
})

function mapStateToProps(state: AppState) {
  return {
    showMessageDialog: state.common.showMessageDialog,
    title: state.common.title,
    content: state.common.content
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageDialog)

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    minHeight: 150,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerView: {
    height: 60,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 15
  },
  contentText: {
    textAlign: 'left',
    color: '#6B6B6B',
    lineHeight: 20,
    fontSize: 14
  },
  footerView: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  agreeView: {
    padding: 10
  },
  agreeText: {
    color: 'blue',
    marginLeft: 20,
    fontSize: 15
  }
})
