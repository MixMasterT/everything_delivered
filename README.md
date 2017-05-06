## Frontend Readme

### How to Run
To run this frontend, you need two terminal windows running two separate
processes. Both need to be in this outer frontend directory. In one, run
'yarn start' or 'npm start' to start a dev server. In the other, run
'webpack --watch' or 'webpack -w' to update the bundle file whenever you
make a change. You will currently still need to refresh the browswer to
see your changes.

### Redux Generator
This frontend directory structure was built with David Hu's [react-redux-generator](https://github.com/davidhu2000/react_redux_generator).
Please don't modify the structure so that generator can still be used. This
is an example of a time where convention over configuration will benefit us,
even though this is not a rails project!

### Webpack
This webpack includes SASS loaders, so we can use SCSS instead of just
plain old CSS. The file-loader and url-loader are also included, which
should make it possible to encode smaller images as base-64 encoded data
urls. I have not had much success getting this feature to work yet, but it
is exciting!

### Github
This repo is set to have branch protection on the master branch. This means you must issue a pull request when you want to merge a feature in with master. Any other team member can accept your pull request, but also has the chance to review the code first. This will encourage thoughtful code review, and clear communication. As a result, **all** team members must be proactive about checking for pending pull requests before pulling code to work on. **Always handle any pull requests first, then run git pull before you start to work!**  



### Dev Timeline
5/5
Add branch protection to master
Nick adds component hierarchy to readme
Michael reads up on Twilio API
Torah adds specific details for schema plan

5/9
Torah add all component's added and front-end building begins
Michael implements pin confirmation through twilio text messages
Nick and Torah start building out front-end components
Taylor set up schema in DB and figure out how to read and write from the database.

### DB Schema
5 Resource Type will be required for this project:
1. User
2. Order
3. Driver
4. Item
5. Vendor

1 User

| key | Type |
| --- | --- |
| _userId | String |
| phoneNumber| String |
| name | String |
| address | String |
| location | latLng |


2 Order

| key | Type |
| --- | --- |
| _orderId | String |
| _uid | String |
| _did | String |
| total | Float |
| items | {} |
| address | String |
| location | latLng |
| timePlaced | dateTime |
| scheduledDeliverTime | dateTime |
| timeDelivered | dateTime |


3 Driver

| key | Type |
| --- | --- |
| _name | String |
| _driverId | String |
| phoneNumber | String |

4 Item

| key | Type |
| --- | --- |
| _name | String |
| _itemId | String |
| _vid | String |
| price | Float |

5 Vendor

| key | Type |
| --- | --- |
| _name | String |
| _vendorId | String |
| url | String |
| imgUrl | String |

### Queries
We need to gain familiarity with the MongoDB query language. In particular, we need to accomplish these queries:

1. Post new order
2. Get past orders for user
3. Get current outstanding orders for driver
4. Update delivery time (driver updates after order completion)
5. Get list of all available items


### Development Plan and Timeline
This project will progress through three stages

First, we will setup and enable users to place orders. We will use 'dummy data' for drivers and 'items', and not worry about vendors or drivers yet at this stage.

- Complete by 5/12

After user's can place orders, and menus can be displayed, we will start to work on driver implementation

Second, we will design and develop driver interface to view current orders, and receive routing information about what items must be delivered to what location next. Ideally, driver's schedule will update after filling each order. Driver will input confirmation of order completion and then get routed to next destination.

- Complete by 5/19

Once drivers and customers are functional, we will start to work on Vendor sign-up.

Finally, vendors will get portal access to sign-up with this service. Vendors will be able to add items into the system.

We may decide to let drivers sign-up independently, or we may make driver sign-up an action that is part of the vendor's access. This part remains to be worked out.

- Complete by 5/26

### Current problems/ Issues
How will we handle different cities or regions?

Do we want to allow drivers to sign-up independently from the vendors, or do we want this to be a service that vendors use to route their own drivers?
