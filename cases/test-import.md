# Open Inquiries – Edge

## /REGRESSION/Open Inquiries/Creation

### Inquiry Type Selection (First Modal)

## Buyer can see "New Inquiry" button on Offers list view @edge
## Buyer can click "New Inquiry" button and see type selection modal @edge
## Buyer can see "Open" option in type selection modal @edge
## Buyer can see "Listing" option in type selection modal @edge
## Buyer can select "Open" inquiry type @edge
## Buyer can select "Listing" inquiry type @edge
## Buyer can click Continue to proceed with selected type @edge
## Buyer can click Back from "Listing" inquiry type and return to type selection modal @edge
## "New Inquiry" button is NOT visible on Ensilio instance @ensilio @negative

### Open Inquiry Type Selection (Second Modal – Spot/Contract)

## Buyer can see Spot/Contract selection modal after selecting "Open" type @edge
## Buyer can see "Spot" option in Spot/Contract modal @edge
## Buyer can see "Contract" option in Spot/Contract modal @edge
## Buyer can select "Spot" inquiry type @edge
## Buyer can select "Contract" inquiry type @edge
## Buyer can click Continue to proceed to creation flow @edge
## Buyer can click Back and return to Open/Listing type selection @edge

### Open Inquiry Creation – General

## Buyer can see "New Inquiry" as page title on inquiry creation page @edge
## Buyer can see wizard stepper with steps: Type, Terms, Products, Review @edge
## Buyer cannot see Visibility step in Open Inquiry creation flow @edge
## Buyer can navigate between steps using Back and Continue buttons @edge
## Buyer can exit creation flow using Exit button @edge
## Buyer can submit Open Inquiry from Review step @edge
## Buyer is redirected to Open Inquiry detail page after submission @edge
## Open Inquiry is automatically routed to supplier based on routing rules after submission @edge

### Open Inquiry Creation – Terms Step (Required Fields)

## Buyer can see "Select Terms" title on Terms step @edge
## Buyer can see Delivery Terms dropdown on Terms step (required) @edge
## Buyer can select Delivery Terms from dropdown on Terms step @edge
## Buyer can see Payment Terms dropdown on Terms step (required) @edge
## Buyer can select Payment Terms from dropdown on Terms step @edge
## Buyer can see Date Needed field on Terms step (required) @edge
## Buyer can set Date Needed using date picker on Terms step @edge
## Continue button is disabled on Terms step until all required fields are filled @edge
## Continue button is enabled on Terms step when all required fields are filled @edge

### Open Inquiry Creation – Terms Step (Delivery Terms & Shipping Destination)

## Buyer can see Port field when selecting FOB delivery term @edge
## Buyer can see Port field when selecting CIF delivery term @edge
## Buyer can see Port field when selecting FAS delivery term @edge
## Buyer can see Port field when selecting CFR delivery term @edge
## Buyer can search and select Port using autocomplete @edge
## Buyer can see Address field when selecting DDP delivery term @edge
## Buyer can see Address field when selecting DAP delivery term @edge
## Buyer can select from previously saved addresses @edge
## Buyer can create new shipping address on Terms step @edge
## No shipping destination field appears when selecting EXW delivery term @edge

### Open Inquiry Creation – Terms Step (Optional Fields)

## Buyer can see Currency Preference dropdown on Terms step (optional) @edge
## Buyer can see Currency Preference defaults to USD @edge
## Buyer can change Currency Preference on Terms step @edge
## Buyer can see Shipping Instructions textarea on Terms step (optional) @edge
## Buyer can enter Shipping Instructions on Terms step @edge
## Buyer can see Inquiry Expiration Date field on Terms step (optional) @edge
## Buyer can set Inquiry Expiration Date using date picker @edge
## Buyer can see expiration date banner on Review step when expiration is set @edge

### Open Inquiry Creation – Products Step (Input Method Selection)

## Buyer can see "Enter Product Details" title on Products step @edge
## Buyer can see "Auto Import" option card on Products step @edge
## Buyer can see "Add Manually" option card on Products step @edge
## Buyer can click "Auto Import" to upload products from spreadsheet @edge
## Buyer can click "Add Manually" to add products one by one @edge

### Open Inquiry Creation – Products Step (Add Manually Flow)

## Buyer can see "New Product" button after clicking "Add Manually" @edge
## Buyer can click "New Product" to open product selection modal @edge
## Buyer can select product category in product modal @edge
## Buyer can select product type in product modal @edge
## Buyer can select product name in product modal @edge
## Buyer can set product units in product modal @edge
## Buyer can set product quantity in product modal @edge
## Buyer can set product specifications in product modal @edge
## Buyer can add product to inquiry from product modal @edge
## Buyer can see added product card on Products step @edge
## Buyer can add multiple products to Open Inquiry @edge
## Buyer can edit added product on Products step @edge
## Buyer can delete added product on Products step @edge
## Continue button is disabled on Products step until at least one product is added @edge

### Open Inquiry Creation – Review Step

## Buyer can see all Terms details on Review step @edge
## Buyer can see all Products details on Review step @edge
## Buyer can see contract details on Review step for contract type @edge
## Buyer can see quantity per interval on Review step for contract type @edge
## Buyer can see expiration date banner on Review step when expiration is set @edge
## Buyer can go back to edit Terms from Review step @edge
## Buyer can go back to edit Products from Review step @edge

---

## /REGRESSION/Open Inquiries/Routing

## Open Inquiry is assigned to fallback supplier when no routing rules match @edge
## Open Inquiry is assigned to supplier based on product routing condition @edge
## Open Inquiry is assigned to supplier based on specifications routing condition @edge
## Open Inquiry is assigned to supplier based on buyer country routing condition @edge
## Open Inquiry is assigned to supplier based on end customer country routing condition @edge
## Open Inquiry routing follows priority order when multiple rules match @edge
## Listing Inquiry is assigned to listing creator (not routing rules) @edge

---

## /REGRESSION/Open Inquiries/View/Buyer

## Buyer can view Open Inquiry detail page @edge
## Buyer can see "Submitted" status on Open Inquiry detail page @edge
## Buyer can see "submitted to" with supplier company and member @edge
## Buyer can see inquiry expiration label on Open Inquiry detail page @edge
## Buyer can see contract banner on Open Inquiry detail page @edge
## Buyer can see quantity per interval on Open Inquiry detail page @edge
## Buyer cannot see "View Listing" button on Open Inquiry detail page @edge
## Buyer can see "View Offer" button on Open Inquiry detail page when offer exists @edge

---

## /REGRESSION/Open Inquiries/View/Supplier

## Supplier can view Open Inquiry detail page @edge
## Supplier can see "Needs Response" status on Open Inquiry detail page @edge
## Supplier can see inquiry expiration label on Open Inquiry detail page @edge
## Supplier can see contract banner on Open Inquiry detail page @edge
## Supplier can see quantity per interval on Open Inquiry detail page @edge
## Supplier can see "Make Offer" button on Open Inquiry detail page @edge
## Supplier can see "Decline Inquiry" button on Open Inquiry detail page @edge

---

## /REGRESSION/Open Inquiries/Transition

## "New Request" button is NOT visible on Requests list page on Edge instance @edge
## Side navigation does NOT show "Requests" menu item on Edge instance @edge
## User cannot access Request list page via direct URL on Edge instance @edge @negative
## Existing RFQ offers/orders remain accessible via breadcrumb navigation on Edge instance @edge
