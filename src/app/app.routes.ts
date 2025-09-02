import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./pages/home').then(m => m.Home) },
	{ path: 'products', loadComponent: () => import('./pages/products').then(m => m.Products) },
	{ path: 'products/:id', loadComponent: () => import('./pages/product-detail').then(m => m.ProductDetail) },
	{ path: 'cart', loadComponent: () => import('./pages/cart').then(m => m.Cart) },
	{ path: 'checkout', loadComponent: () => import('./pages/checkout').then(m => m.Checkout) },
	{ path: 'about', loadComponent: () => import('./pages/about').then(m => m.About) },
	{ path: 'contact', loadComponent: () => import('./pages/contact').then(m => m.Contact) },
	{ path: '**', redirectTo: '' }
];
