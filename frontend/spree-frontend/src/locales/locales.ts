import {createPinia} from "pinia";
import router from "@/router";
import {createI18n} from "vue-i18n";
import {cn} from "@/locales/cn.ts";

export const i18n = createI18n({
  locales: [
    {code: 'en', iso: 'en-SG', name: 'English'},
    {code: 'cn', iso: 'cn-TW', name: 'Chinese'},
    {code: 'kr', iso: 'kr-KR', name: 'Korean'}
  ],
  defaultLocale: 'en',
  locale: 'en',
  fallbackLocale: 'en',
  messages:
    {
      en: {
        "cartElements": {
          "cartCard": {
            "save": "Save",
            "lowStock": "Low Stock",
            "moveToWishlist": "Move To Wishlist"
          },
          "cartTrigger": {},
          "closeIcon": {},
          "emptyCart": {},
          "quantityInput": {},
          "swipeCard": {},
          "trashIcon": {}
        },
        "filtering": {
          "categoryFilter": {
            "label": "Label"
          },
          "colorFilter": {},
          "filters": {},
          "globalFilter": {},
          "priceFilter": {
            "price": "Price"
          },
          "resetFiltersButton": {
            "clearFilters": "Clear Filters:"
          },
          "showFilterTrigger": {},
          "starRatingFilter": {
            "rating": "",
            "up": "",

          }
        },
        "forms": {
          "addressSummary": {
            "edit": "",
            "addressSummary": ""
          },
          "billingAndShipping": {
            "billingAndShipping": "",
            "billingAddress": ""
          },
          "billingDetails": {
            "firstName": "First Name",
            "lastName": "Last Name",
            "address1": "Address 1",
            "address2": "Address 2",
            "city": "City",
            "state": "State",
            "optional": "Optional",
            "country": "Country",
            "zip": "Zip",
            "phone": "Phone",
          },
          "changePassword": {},
          "loginAndRegister": {}
        },
        "generalElements": {
          "mobileMenu": {
            "generalMenu": "General Menu"
          },
          "heroBanner": {
            "shopNow": "Shop now",
            "ourLatestCollection": "Our latest Collection is here",
            "justLanded": "Just Landed",
            "theNewYear": "The New Year"
          },
          "appFooter": {
            "about": "About",
            "information": "Information",
            "careers": "Careers",
            "press": "Press",
            "products": "Products",
            "newArrivals": "New Arrivals",
            "onSale": "On Sale",
            "topRated": "Top Rated",
            "giftCards": "Gift Cards",
            "customerService": "Customer Service",
            "contactUs": "Contact Us",
            "shippingReturns": "Shipping Returns",
            "privacyPolicy": "Privacy Policy",
            "termsConditions": "Terms And Conditions",
            "myAccount": "My Account",
            "orderHistory": "Order History",
            "wishlist": "Wishlist",
            "newsLetter": "Newsletter"
          },
          "appHeader": {},
          "breadCrump": {},
          "logo": {},
          "mainMenu": {
            "home": "Home",
            "products": "Products",
            "category": "Categories",
            "contact": "Contacts",
            "wishList": "Wish List",
            "myAccount": "My Account"

          },
          "menuTrigger": {},
          "searchTrigger": {},
          "SEOHead": {}
        },
        "productElements": {
          "attributeSelections": {
            "choose": ""
          },
          "productCard": {},
          "productImageGallery": {},
          "productPrice": {},
          "productTabs": {},
          "reviewsScore": {
            "customerReviews": "",
            "noReviews": "",
            "reviews": "",
            "rating": "",
            "shareYourThoughts": "",
            "ifYouHaveUsed": "",
            "shopReview": "",
            "shopRateReview": "",
            "rateContent": "",
            "rateEmail": "",
            "submit": ""
          },
          "saleBadge": {},
          "shareButton": {},
          "starRating": {},

          "wishlistButton": {}
        },

        "shopElements": {
          "addCoupon": {
            "couponCode": "Coupon Code:",
            "apply": "Apply",
            "generalShipping": "General Shipping",
            "discount": "Discount",
            "viewCart": "View Cart",
            "checkout": "Checkout"
          },
          "cart": {
            "shopCart": "Shop Cart",
            "subTotal": "Shop Total",
            "generalShipping": "General Shipping",
            "discount": "Discount",
            "viewCart": "View Cart",
            "checkout": "Checkout"
          },
          "countrySelect": {
            "selectACountry": "Select A Country"
          },
          "emptyCartMessage": {
            "cartEmpty": "Cart Empty:",
            "addProductsInYourCart": "Add Products In Your Cart",
            "browseOurProducts": "Browse Our Products"
          },
          "noProductsFound": {
            "subText": "No Products Found",
            "clearFiltersAndSearch": "Clear Filters and Search",
            "title": "No Products Found",
            "clearFilterAndSearch": "Clear Filter and Search"
          },
          "orderByDropdown": {
            "latest": "Latest",
            "alphabetically": "Alphabetical",
            "rating": "Rating",
            "discount": "Discount",
            "price": "Price"

          },
          "orderStatusLabel": {},
          "orderSummary": {
            "title": "Order Summary:",
            "subtotal": "Subtotal:",
            "shipping": "Shipping:",
            "discount": "Discount:",
            "total": "Total:",

          },
          "pagination": {},
          "paymentOptions": {},
          "productGrid": {},
          "productResultCount": {
            "showing": "Showing",
            "to": "To",
            "of": "Of",
          },
          "productReviews": {
            "langCode": "Language Code"
          },
          "productRow": {},
          "productSearch": {
            "searchProducts": "Search Products",
            "clear": "Clear"
          },
          "shippingOptions": {},
          "stateSelect": {
            "option": "Option"
          },
          "stripeElement": {},
          "websiteShortDescription": {},
          "wishList": {
            "title": "Wishlist",
            "item": "Item",
            "wishlistNoItems": "Wishlist Number of Items"
          }
        },
        "ui": {
          "button": {},
          "colorModeSwitcher": {},


        },
        "components": {
          "accountActivity": {
            "accountActivity": "Account Activity",
            "trackAccountActivity": "Track Account Activity:",
            "recentActivity": "Recent Activity:",
            "title": "Title:",
            "description": "Description:",
            "noActivityFound": "No Activity Found",
            "exportActivityLog": "Export Activity Log"
          },
          "accountMyDetails": {},
          "accountSettings": {
            "settings": "Settings:",
            "manageYourPrefence": "Manage Your Preference",
            "preferences": "Preferences:",
            "theme": "Theme:",
            "dangerZone": "Danger Zone",
            "deleteAccount": "Delete Account",
            "onceYouDeleteYourAccount": "Once You Delete Your Account",
            "button": "Button"
          },
          "categoryCard": {},
          "downloadableItems": {
            "product": "Product",
            "downloadsRemaining": "Downloads Remaining",
            "expires": "Expires:",
            "download": "Download"
          },
          "downloadList": {
            "refreshlist": "Refresh List",
            "noDownloadsFound": "No Downloads Found"
          },
          "orderList": {
            "order": "Order",
            "date": "Date",
            "status": "Status",
            "total": "Total",
            "refreshList": "Refresh List",
            "noOrdersFound": "No Orders Found"
          },
          "signInLink": {
            "myAccount": "My Account",
            "wishList": "Wishlist",
            "availability": "Availability",
            "category": "Category",
            "link": "Link",
            "youMayLike": "You may like"
          },
          "stockStatus": {
            "inStock": "In Stock"
          },
          "wishlistItem": {},
          "wpaAdminLink": {},
        },
        "views": {
          "homeView": {
            "freeShipping": "Free Shipping",
            "freeShippingOnOrder": "Free shipping on order over $50",
            "paymentSource": "100% Payment Source",
            "yourPaymentsAreSafe": "Your payment are safe with us.",
            "support24/7": "Support 24/7",
            "onlineSupport": "24/7 Online support",
            "viewAll": "View All"
          },
          "orderView": {
            "orderSummary": "Order Summary",
            "orderReceived": "Order Received",
            "orderThanks": "Order Thanks:",
            "shopOrder": "Shop Order:",
            "generalStatus": "General Status",
            "generalPaymentMethod": "General Payment Method:",
            "shopSubtotal": "Shop Subtotal:",
            "generalTax": "General Tax:",
            "generalShipping": "General Shipping:",
            "shopDiscount": "Shop Discount:",
          },
          "privacyPolicyView": {},
          "cartView": {},
          "categoriesView": {
            "noCategoriesFound": "No Categories Found"
          },
          "orderSummaryView": {
            "shopByCategory": " Shop By Category",
            "viewAll": "View All"
          },
          "contactView": {
            "checkOurFAQs": "Check our FAQs first",
            "shippingPolicy": "Shipping Policy",
            "returnsAndExchange": "Returns & Exchanges",
            "visitOurBoutique": "Visit Our Boutique",
            "76LeBinh": "1277 Hiệp Nhất, Phường 4, Tân Sơn Nhất, Hồ Chí Minh, Vietnam",
            "sendAMessage": "Send a Message",
            "fullName": "Full Name",
            "emailAddress": "Email Address",
            "orderNumber": "Order Number",
            "message": "Message",
            "contactUs": "Contact Us",
            "haveAQuestion": "Have A Question",
            "yourAnswer": "Your Answer",
            "getInTouch": "Get In Touch",
            "monToFri": "Monday To Friday, 9AM - 5PM VNT"
          },
          "checkoutView": {
            "title": "Check Out",
            "addProductsInYourCart": "Add Products In Your Cart",
            "contactInformation": "Contact Information",
            "alreadyHaveAnAccountviews": {
              "checkoutView": {
                "logIn": "Login"
              }
            },
            "billingEmail": "Billing Email",
            "billing": "Billing",
            "differentAddress": "Different Address",
            "shippingSelect": "Shipping Select",
            "shippingAddress": "Shipping Address",

          },
          "productView": {
            "sku": "SKU"
          },
          "shopElements": {
            "orderSummary": {
              "paymentOptions": "Payment Options",
              "orderNote": "Order Note"

            }
          },


        },


      },
      cn: cn,
      kr: {},
    }
})
