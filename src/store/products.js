import { writable } from 'svelte/store'

export const products = writable([
	{ 
		id: 1, 
		image: 'stock-2.jpg', 
		name: 'Pine Forest', 
		price: 100000, 
		stock: 250, 
		category: 'jar',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Modi voluptates sequi unde atque consequatur quibusdam, a inventore ab asperiores velit debitis necessitatibus provident voluptate, praesentium eos error cupiditate quisquam! Magni necessitatibus, id ea quidem corrupti voluptatibus, neque sunt, rem consectetur quod dicta ut rerum repudiandae molestiae dolorem et! Magnam quibusdam sunt mollitia aliquam quas et dignissimos placeat maiores? Iusto non asperiores minima, doloremque amet sit commodi recusandae nemo incidunt qui, facilis? Nulla dolores sint temporibus aliquid, ipsa ratione libero fugiat quas totam tempore incidunt accusamus provident aperiam officia. Sapiente voluptas labore facere esse fugiat ipsam blanditiis, aperiam quo beatae. At aspernatur maiores eos in temporibus. Ipsum reiciendis corporis necessitatibus est provident, rem iure temporibus praesentium inventore saepe vero aut fuga ea in iste molestiae magni consequuntur. Necessitatibus, nemo iusto modi accusantium iure at. Voluptatum perferendis, itaque! Aliquid cum magni nemo labore, incidunt quo commodi facilis cumque tempore. Non veritatis quo fuga facilis ipsum libero quisquam, eaque ea eveniet id voluptates, aliquam dolores, illo excepturi hic laborum iste. Eligendi expedita id temporibus ea numquam aspernatur vitae! Iure, accusantium distinctio sed. Magni et quisquam quo sapiente veniam ab tempore assumenda, accusantium est eaque autem, laborum cupiditate eius adipisci iusto. Odio, exercitationem cum.' 
	},
	{ 
		id: 2, 
		image: 'stock-0.jpg', 
		name: 'Beach ball', 
		price: 10000, 
		stock: 50, 
		category: 'toys',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Modi voluptates sequi unde atque consequatur quibusdam, a inventore ab asperiores velit debitis necessitatibus provident voluptate, praesentium eos error cupiditate quisquam! Magni necessitatibus, id ea quidem corrupti voluptatibus, neque sunt, rem consectetur quod dicta ut rerum repudiandae molestiae dolorem et! Magnam quibusdam sunt mollitia aliquam quas et dignissimos placeat maiores? Iusto non asperiores minima, doloremque amet sit commodi recusandae nemo incidunt qui, facilis? Nulla dolores sint temporibus aliquid, ipsa ratione libero fugiat quas totam tempore incidunt accusamus provident aperiam officia. Sapiente voluptas labore facere esse fugiat ipsam blanditiis, aperiam quo beatae. At aspernatur maiores eos in temporibus. Ipsum reiciendis corporis necessitatibus est provident, rem iure temporibus praesentium inventore saepe vero aut fuga ea in iste molestiae magni consequuntur. Necessitatibus, nemo iusto modi accusantium iure at. Voluptatum perferendis, itaque! Aliquid cum magni nemo labore, incidunt quo commodi facilis cumque tempore. Non veritatis quo fuga facilis ipsum libero quisquam, eaque ea eveniet id voluptates, aliquam dolores, illo excepturi hic laborum iste. Eligendi expedita id temporibus ea numquam aspernatur vitae! Iure, accusantium distinctio sed. Magni et quisquam quo sapiente veniam ab tempore assumenda, accusantium est eaque autem, laborum cupiditate eius adipisci iusto. Odio, exercitationem cum.' 
	},
	{ 
		id: 3, 
		image: 'stock-1.jpg', 
		name: 'useless lamp', 
		price: 1000000, 
		stock: 20, 
		category: 'furniture',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Modi voluptates sequi unde atque consequatur quibusdam, a inventore ab asperiores velit debitis necessitatibus provident voluptate, praesentium eos error cupiditate quisquam! Magni necessitatibus, id ea quidem corrupti voluptatibus, neque sunt, rem consectetur quod dicta ut rerum repudiandae molestiae dolorem et! Magnam quibusdam sunt mollitia aliquam quas et dignissimos placeat maiores? Iusto non asperiores minima, doloremque amet sit commodi recusandae nemo incidunt qui, facilis? Nulla dolores sint temporibus aliquid, ipsa ratione libero fugiat quas totam tempore incidunt accusamus provident aperiam officia. Sapiente voluptas labore facere esse fugiat ipsam blanditiis, aperiam quo beatae. At aspernatur maiores eos in temporibus. Ipsum reiciendis corporis necessitatibus est provident, rem iure temporibus praesentium inventore saepe vero aut fuga ea in iste molestiae magni consequuntur. Necessitatibus, nemo iusto modi accusantium iure at. Voluptatum perferendis, itaque! Aliquid cum magni nemo labore, incidunt quo commodi facilis cumque tempore. Non veritatis quo fuga facilis ipsum libero quisquam, eaque ea eveniet id voluptates, aliquam dolores, illo excepturi hic laborum iste. Eligendi expedita id temporibus ea numquam aspernatur vitae! Iure, accusantium distinctio sed. Magni et quisquam quo sapiente veniam ab tempore assumenda, accusantium est eaque autem, laborum cupiditate eius adipisci iusto. Odio, exercitationem cum.' 
	},
	{ 
		id: 4, 
		image: 'stock-3.jpg', 
		name: 'extract weed', 
		price: 1000000, 
		stock: 25, 
		category: 'drug',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing, elit. Modi voluptates sequi unde atque consequatur quibusdam, a inventore ab asperiores velit debitis necessitatibus provident voluptate, praesentium eos error cupiditate quisquam! Magni necessitatibus, id ea quidem corrupti voluptatibus, neque sunt, rem consectetur quod dicta ut rerum repudiandae molestiae dolorem et! Magnam quibusdam sunt mollitia aliquam quas et dignissimos placeat maiores? Iusto non asperiores minima, doloremque amet sit commodi recusandae nemo incidunt qui, facilis? Nulla dolores sint temporibus aliquid, ipsa ratione libero fugiat quas totam tempore incidunt accusamus provident aperiam officia. Sapiente voluptas labore facere esse fugiat ipsam blanditiis, aperiam quo beatae. At aspernatur maiores eos in temporibus. Ipsum reiciendis corporis necessitatibus est provident, rem iure temporibus praesentium inventore saepe vero aut fuga ea in iste molestiae magni consequuntur. Necessitatibus, nemo iusto modi accusantium iure at. Voluptatum perferendis, itaque! Aliquid cum magni nemo labore, incidunt quo commodi facilis cumque tempore. Non veritatis quo fuga facilis ipsum libero quisquam, eaque ea eveniet id voluptates, aliquam dolores, illo excepturi hic laborum iste. Eligendi expedita id temporibus ea numquam aspernatur vitae! Iure, accusantium distinctio sed. Magni et quisquam quo sapiente veniam ab tempore assumenda, accusantium est eaque autem, laborum cupiditate eius adipisci iusto. Odio, exercitationem cum.' 
	}
])