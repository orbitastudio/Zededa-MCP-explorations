# Card omponent

@https://www.figma.com/design/ONW7nOYixEIkUGCnUxgDwN/Zededa-UX-flows?node-id=50-2084&t=HQCruTRhpJU6cWZe-4

## Task
Create an interactive filtcard component that matches the Figma design with these behaviors:

### Core Functionality
- **Three states**: "Default" state, "Hover" state when the user hovers the mouse over the component, and "Selected" state when the user clicks the component
- **State switching**: Component changes appearance between states
- **Semantic colors**: Use semantic colors to express different information and its relevance
### Required Interactions
1. **Default state**: Component shows initial appearance from Figma
3. **Hover state**: The card changes when the user hover the mouse over it.
2. **Click card**: Makes a ripple effect.

### Technical Requirements
- **Framework**: Use React
- **Styling**: Match Figma specs exactly (colors, fonts, spacing, borders)
- **Icons**: Implement different icons related to each semantic color
- **Responsive**: Ensure mobile-friendly touch targets
- **Accessible**: Keyboard navigation + screen reader support
- **Events**: Emit changes so parent components can respond

### Implementation Guide
1. **Analyze Figma**: Identify the two states and their visual differences
2. **Extract tokens**: Colors, typography, spacing, border radius from design
3. **Plan interactions**: Map user actions to state changes
4. **Build component**: Start with static states, add interactivity
5. **Test thoroughly**: Verify all interactions work across devices

### Success Criteria
✅ Visual design matches Figma exactly  
✅ State transitions work smoothly  
✅ Accessible via keyboard and screen readers  
✅ Works on mobile and desktop  

**Deliverable**: Functional card component that replicates Figma design with full interactivity.