import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -30,
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  inputField: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: '#262626',
    borderRadius: 6,
    marginRight: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#0D0D0D',
    color: '#F2F2F2',
    fontSize: 16,
  },
  focusOutline: {
    borderColor: '#5E60CE',
    
  },
  button: {
    width: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    width: 18,
    height: 18,
    borderColor: '#F2F2F2',
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center'
  },
  textButton: {
    lineHeight: 16,
    color: '#F2F2F2',
  }
})