import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 173,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  coutersWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  body: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },
  bodyContent: {
    margin:24,
  }
})