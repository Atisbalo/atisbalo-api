const express = require('express')
const app = express()
/*
 Import Middlewares
 */

// const { verifyToken, verifyTokenEmail } = require('./middlewares/auth')

/*
 Import Controllers
 */

const AddressesController = require('./controllers/addressesController')
const CommentsController = require('./controllers/commentsController')
const DocumentsController = require('./controllers/documentsController')
const LocalDocumentsController = require('./controllers/localDocumentsController')
const LocalImagesController = require('./controllers/localImagesController')
const LocalOwnsController = require('./controllers/localOwnController')
const LocalsAsociatedController = require('./controllers/localsAsociatedController')
const LocalController = require('./controllers/localsController')
const LocalTagsController = require('./controllers/localTagsController')
const LocalTypeController = require('./controllers/localTypesController')
const OfferImagesController = require('./controllers/offerImagesController')
const OffersController = require('./controllers/offersController')
const RatingsController = require('./controllers/ratingsController')
const RolesController = require('./controllers/rolesController')
const TagsController = require('./controllers/tagsController')
const UsersController = require('./controllers/usersController')
const UsersFavouriteLocalsController = require('./controllers/usersFauvoriteLocalsController')
const AuthController = require('./controllers/authController')

/*
Auth
*/

app.post('/register', AuthController.register)
app.post('/login', AuthController.login)
app.post('/logout', AuthController.logout)
app.post('/token', AuthController.refresh)

/*
 Addresses
 */

app.get('/addresses', AddressesController.getAllAddresses)
app.post('/addresses', AddressesController.createAddress)

/*
 Comments
 */

app.get('/comments', CommentsController.getAllComments)

/*
 Documents
 */

app.get('/documents', DocumentsController.getAllDocuments)

/*
 LocalDocuments
 */

app.get('/localdocuments', LocalDocumentsController.getAllLocalDocuments)

/*
 LocalImages
 */
app.get('/localimages', LocalImagesController.getAllLocalImages)

/*
 LocalOwns
 */

app.get('/localowns', LocalOwnsController.getAllLocalOwns)

/*
 LocalsAsociated
 */

app.get('/localasociateds', LocalsAsociatedController.getAllLocalsAsociated)

/*
 LocalController
 */
app.post('/locals', LocalController.createLocal)
app.get('/locals', LocalController.getLocalsGeo)
app.get('/locals/:id', LocalController.getLocalByID)

/*
 LocalTags
 */
app.get('/localtags', LocalTagsController.getAllLocalTags)

/*
 LocalType
 */
app.post('/localtype', LocalTypeController.createLocalType)
app.get('/localtypes', LocalTypeController.getAllLocalTypes)

/*
 OfferImages
 */

app.get('/offerimages', OfferImagesController.getAllOfferImages)

/*
 Offers
 */

app.get('/offers', OffersController.getAllOffers)

/*
 Ratings
 */
app.get('/ratings', RatingsController.getAllRatings)

/*
 Roles
 */

app.get('/roles', RolesController.getAllRoles)

/*
 Tags
 */

app.get('/tags', TagsController.getAllTags)

/*
 Users
 */
app.get('/users', UsersController.getAllUsers)
app.get('/user/:id', UsersController.getUserById)
app.post('/user', UsersController.createUser)
app.put('/user/:id', UsersController.updateUser)
app.put('/user/:id/email', UsersController.changeEmailUser)
app.put('/user/:id/password', UsersController.changePasswordUser)
app.get('/user/:id/validate', UsersController.verifyUser)
app.delete('/user/:id', UsersController.deleteUser)
app.delete('/user/:id/erase', UsersController.eraseUser)

/*
 UsersFauvoriteLocals
 */
app.get('/userfavouritelocals',UsersFavouriteLocalsController.getAllUserFavouriteLocals)
app.get('/user/:id/favouriteLocals',UsersFavouriteLocalsController.getUserFavouriteLocals)
app.post('/user/:id/favouriteLocals/:localId', UsersFavouriteLocalsController.addToFavouriteLocal)
app.delete('/user/:id/favouriteLocals/:localId', UsersFavouriteLocalsController.removeFromFavouriteLocal)
// const gController = require('./controllers/gController')
// app.get('/g', gController.generate)


module.exports = app
