import Vue from 'vue'
import { entries, merge } from 'lodash'

export function app (name, component, custom_store = {}) {
	Vue.use(Vuex);

  const node = document.querySelector(`#vue-app[vue-app=${name}]`)

  if (node == null || node == undefined) {
    return null;
  }
  
  console.log(node);

	// root store
	const default_store = {
		state: {},
		getters: {}
	}

	const store = merge({}, default_store, custom_store)

	// read and pass props into main component
	const props = {}
	entries(node.dataset).forEach(([key, value]) => {
		try{
			props[key] = JSON.parse(value);
		} catch(e) {
			props[key] = value;
		}
	})

	// basic root instance
	const instance = {
		name: 'App',
		store: new Vuex.Store(store),
		render(h) {
			return h(
				'div',
				{
					attrs: {
						id: `app=${name}`,
					}
				},
				[h(component, { props })]
			)
		}
	}

	return new Vue(instance).$mount(node)
}
