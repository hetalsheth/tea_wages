from frappe import _

<<<<<<< HEAD
# Adding heatmap and links for some doctype in Tearp Labors Information 
=======
# Creating dashboard in the Tearp labors Information doctype
>>>>>>> wage_aditya
def get_data():
	return {
			'heatmap': True,
			'heatmap_message': _('This is the links for different Labor Information.'),
			'fieldname': 'worker_id',
			'transactions': [
				{
					'label': _('Tearp Wages Structure'),
                    'color': '#FF0000',
					'items': ['Tearp Wages Reconciliation','Tearp Labor Family']
				}
			]
		}
