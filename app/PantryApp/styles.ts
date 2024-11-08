import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 16,

  },
  scanButton: {
    
    backgroundColor: '#18181b',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: '10%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
  activeNavItem: {
    color: '#007AFF',
  },
  card: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: '5%',
    maxHeight: '50%',
    overflow: 'hidden',
    position: 'relative',
  },
  recipeCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: '5%',
  },
  plannerCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: '5%',
  },
  cardGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 12,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  smallText: {
    fontSize: 14,
    color: '#666',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  dayRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  mealsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 8,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  dateText: {
    fontSize: 13,
    color: '#fafafa',
  },
  mealSlot: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 4,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 4,
    marginVertical: 2,
  },
  scanButtonDisabled: {
    backgroundColor: '#94a3b8',
    opacity: 0.7,
  },
  
  itemName: {
    fontSize: 16,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  expiredStatus: {
    backgroundColor: '#ff4444',
  },
  warningStatus: {
    backgroundColor: '#ffbb33',
  },
  normalStatus: {
    backgroundColor: '#e8e8e8',
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
  },
  quantityBadge: {
    backgroundColor: '#e8e8e8',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  quantityText: {
    color: '#000',
    fontSize: 14,
  },
  navbar: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#fafafa',
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '600',
  },
  plannerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  weekNavigator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  weekText: {
    fontSize: 18,
    fontWeight: '500',
  },
  headerRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 8,
  },
  dayHeaderCell: {
    width: 80,
    fontWeight: '600',
  },
  mealHeaderCell: {
    flex: 1,
    fontWeight: '600',
    textAlign: 'center',
  },
  mealCell: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayCell: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    width: 60,
    height: 55,
    backgroundColor: '#18181b',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  mealText: {
    fontSize: 14,
    textAlign: 'center',
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 8,
    borderRadius: 4,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  formSection: {
    marginBottom: 20,
  },
  imageUploadButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 20,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uploadText: {
    marginTop: 8,
    color: '#666',
    textAlign: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 4,
    marginVertical: 8,
  },
  addButtonText: {
    color: '#333',
    fontSize: 14,
  },
  smallInput: {
    flex: 1,
    marginRight: 8,
    maxWidth: 80,
  },
  largeInput: {
    flex: 3,
    marginRight: 8,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  instructionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  saveButton: {
    backgroundColor: '#2f2f31',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fafafa',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addRecipeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 50,
    backgroundColor: '#2f2f31',
    padding: 8,
    borderRadius: 4,
    marginVertical: 8,
  },
  addRecipeButtonText: {
    color: '#fafafa',
    fontSize: 20,
    fontWeight: 'bold',
  }
}); 
