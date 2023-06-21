import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	kit: {
		adapter: adapter({
			edge: false,
			split: false
		}),
		alias: {
			$components: 'src/lib/components',
			'$components/*': 'src/lib/components/*'
		}
	},
	preprocess: vitePreprocess(),
	vitePlugin: {
		inspector: {
			// change shortcut
			toggleKeyCombo: 'meta-shift',
			// hold and release key to toggle inspector mode
			holdMode: true,
			// show or hide the inspector option
			showToggleButton: 'never',
			// inspector position
			toggleButtonPos: 'top-right'
		}
	},
	shadcn: {
		componentPath: './src/lib/components/ui'
	}
};
export default config;
