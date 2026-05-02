import {createPinia} from "pinia";
import router from "@/router";
import {createI18n} from "vue-i18n";

export const i18n = createI18n({
  locales: [
    { code: 'en', iso: 'en-SG', name: 'English' },
    { code: 'cn', iso: 'cn-TW', name: 'Chinese' },
    { code: 'kr', iso: 'kr-KR', name: 'Korean' }
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
            "billingAndShipping":"",
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
            "shopNow" : "Shop now",
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
          "appHeader": {

          },
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
          "stockStatus": {},
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
          "pagination": {

          },
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
          "button": {

          },
          "colorModeSwitcher": {

          },


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
          "accountMyDetails": {

          },
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
          "categoryCard": {

          },
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
            "order":"Order",
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
          "wishlistItem": {},
          "wpaAdminLink": {},
          },
        "views": {
          "homeView": {
            "freeShipping": "Free Shipping",
            "freeShippingOnOrder": "Free shipping on order over $50",
            "paymentSource": "100% Payment Source",
            "yourPaymentsAreSafe":"Your payment are safe with us.",
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
          "privacyPolicyView": {

          },
          "cartView": {

          },
          "categoriesView": {
            "noCategoriesFound": "No Categories Found"
          },
          "orderSummaryView": {
            "shopByCategory":" Shop By Category",
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
          "shopElements": {
            "orderSummary": {
              "paymentOptions": "Payment Options",
              "orderNote": "Order Note"

            }
          },


        },


        },
      cn: {
        "cartElements": {
          "cartCard": {
            "save": "保存",
            "lowStock": "库存紧张",
            "moveToWishlist": "移至愿望清单"
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
            "label": "标签"
          },
          "colorFilter": {},
          "filters": {},
          "globalFilter": {},
          "priceFilter": {
            "price": "价格"
          },
          "resetFiltersButton": {
            "clearFilters": "清除筛选:"
          },
          "showFilterTrigger": {},
          "starRatingFilter": {
            "rating": "评分",
            "up": "以上"
          }
        },
        "forms": {
          "addressSummary": {
            "edit": "编辑",
            "addressSummary": "地址摘要"
          },
          "billingAndShipping": {
            "billingAndShipping": "账单与配送",
            "billingAddress": "账单地址"
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
          "appFooter": {
            "information": "信息",
            "careers": "招贤纳士",
            "press": "新闻中心",
            "products": "产品:",
            "newArrivals": "新品上市",
            "onSale": "限时特惠",
            "topRated": "高分好评",
            "giftCards": "礼品卡:",
            "customerService": "客户服务",
            "contactUs": "联系我们",
            "shippingReturns": "配送与退货:",
            "privacyPolicy": "隐私政策",
            "termsConditions": "条款与条件",
            "myAccount": "我的账户",
            "orderHistory": "历史订单:",
            "wishlist": "愿望清单",
            "newsLetter": "邮件订阅"
          },
          "appHeader": {},
          "breadCrump": {},
          "heroBanner": {},
          "logo": {},
          "mainMenu": {
            "home": "首页",
            "products": "产品",
            "category": "分类",
            "contact": "联系方式"
          },
          "menuTrigger": {},
          "mobileMenu": {},
          "searchTrigger": {},
          "SEOHead": {}
        },
        "productElements": {
          "attributeSelections": {
            "choose": "请选择"
          },
          "productCard": {},
          "productImageGallery": {},
          "productPrice": {},
          "productTabs": {},
          "reviewsScore": {
            "customerReviews": "客户评价",
            "noReviews": "暂无评价",
            "reviews": "评价",
            "rating": "评分",
            "shareYourThoughts": "分享您的想法",
            "ifYouHaveUsed": "如果您已使用过此产品",
            "shopReview": "店铺评价",
            "shopRateReview": "店铺评分与评价",
            "rateContent": "评价内容",
            "rateEmail": "评价邮箱",
            "submit": "提交"
          },
          "saleBadge": {},
          "shareButton": {},
          "starRating": {},
          "stockStatus": {},
          "wishlistButton": {},
        },

        "shopElements": {
          "addCoupon": {
            "couponCode": "优惠券码:",
            "apply": "应用",
            "generalShipping": "普通配送",
            "discount": "折扣",
            "viewCart": "查看购物车",
            "checkout": "结算"
          },
          "cart": {
            "shopCart": "购物车",
            "subTotal": "商店合计"
          },
          "countrySelect": {
            "selectACountry": "选择国家"
          },
          "emptyCartMessage": {
            "cartEmpty": "购物车是空的:",
            "addProductsInYourCart": "将产品加入购物车",
            "browseOurProducts": "浏览我们的产品"
          },
          "noProductsFound": {
            "title": "未找到产品",
            "clearFilterAndSearch": "清除筛选和搜索"
          },
          "orderByDropdown": {
            "latest": "最新",
            "alphabetical": "字母顺序",
            "rating": "评分",
            "discount": "折扣幅度"
          },
          "orderStatusLabel": {},
          "orderSummary": {
            "title": "订单摘要:",
            "subtotal": "小计:",
            "shipping": "运费:",
            "discount": "折扣:",
            "total": "总计:"
          },
          "pagination": {},
          "paymentOptions": {},
          "productGrid": {},
          "productResultCount": {
            "showing": "显示",
            "to": "至",
            "of": "总计"
          },
          "productReviews": {
            "langCode": "语言代码"
          },
          "productRow": {},
          "productSearch": {
            "searchProducts": "搜索产品",
            "clear": "清除"
          },
          "shippingOptions": {},
          "stateSelect": {
            "option": "选项"
          },
          "stripeElement": {},
          "websiteShortDescription": {},
          "wishList": {
            "title": "愿望清单",
            "item": "商品",
            "wishlistNoItems": "愿望清单商品数量"
          }
        },
        "ui": {
          "button": {},
          "colorModeSwitcher": {}
        },
        "components": {
          "accountActivity": {
            "accountActivity": "账户活动",
            "trackAccountActivity": "追踪账户活动:",
            "recentActivity": "最近活动:",
            "title": "标题:",
            "description": "描述:",
            "noActivityFound": "未发现活动记录",
            "exportActivityLog": "导出活动日志"
          },
          "accountMyDetails": {},
          "accountSettings": {
            "settings": "设置:",
            "manageYourPrefence": "管理您的偏好",
            "preferences": "偏好设置:",
            "theme": "主题:",
            "dangerZone": "危险区域",
            "deleteAccount": "注销账户",
            "onceYouDeleteYourAccount": "一旦您注销账户",
            "button": "按钮"
          },
          "categoryCard": {},
          "downloadableItems": {
            "product": "产品",
            "downloadsRemaining": "剩余下载次数",
            "expires": "有效期至:",
            "download": "下载"
          },
          "downloadList": {
            "refreshlist": "刷新列表",
            "noDownloadsFound": "未找到下载内容"
          },
          "orderList": {
            "order": "订单",
            "date": "日期",
            "status": "状态",
            "total": "总计",
            "refreshList": "刷新列表",
            "noOrdersFound": "未找到订单"
          },
          "signInLink": {},
          "wishlistItem": {},
          "wpaAdminLink": {},
          "views": {
            "cartView": {},
            "categoriesView": {},
            "homeView": {
              "freeShipping": "Free Shipping",
              "freeShippingOnOrder": "Free shipping on order over $50",
              "paymentSource": "100% Payment Source",
              "yourPaymentsAreSafe":"Your payment are safe with us.",
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
            "privacyPolicyView": {

            }
          }
        }
      },
      kr: {},
    }
})
