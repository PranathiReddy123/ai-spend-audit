# Testing Notes

## Manual Testing Completed

### Homepage
- Verified responsive layout
- Verified navigation links
- Verified CTA button routing

### Audit Form
- Tested tool selection dropdowns
- Tested seat count input handling
- Verified localStorage persistence

### Results Dashboard
- Verified dynamic spend calculations
- Verified optimization score rendering
- Verified analytics chart rendering
- Verified recommendation logic updates

## Future Testing Improvements

- Unit testing for pricing engine
- Edge-case validation
- Mobile device testing
- Cross-browser testing


---

# Audit Engine Test Scenarios

## 1. ChatGPT Team Overspend Detection

Purpose:
- Verify that smaller teams on expensive plans receive optimization recommendations.

Expected Result:
- Savings should be calculated correctly.
- Recommendation should suggest lower-cost alternatives.

---

## 2. Cursor Enterprise Recommendation Logic

Purpose:
- Verify that large engineering teams using Cursor receive enterprise-focused recommendations.

Expected Result:
- Dashboard should display scalability and license management recommendations.

---

## 3. Pricing Engine Validation

Purpose:
- Verify that pricing.ts correctly maps plans and monthly costs.

Expected Result:
- Each tool and plan combination returns the expected monthly spend.

---

## 4. Optimization Score Calculation

Purpose:
- Verify optimization score changes based on savings opportunities.

Expected Result:
- Overspending scenarios should reduce optimization score.
- Optimized setups should display higher scores.

---

## 5. Savings Calculation Logic

Purpose:
- Verify monthly and annual savings calculations.

Expected Result:
- Annual savings should equal monthly savings × 12.
- Optimized spend should reflect savings deductions correctly.

