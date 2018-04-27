from frappe import _

# Adding heatmap and links for some doctype in Tearp Labors Information 
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
