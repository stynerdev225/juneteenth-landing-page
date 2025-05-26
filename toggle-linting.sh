#!/bin/bash

# Script to toggle linting warnings on/off

VSCODE_SETTINGS=".vscode/settings.json"
MARKDOWNLINT_CONFIG=".markdownlint.json"

# Function to disable all linting warnings
disable_warnings() {
    echo "🔇 Disabling all linting warnings..."
    
    # Update VS Code settings to disable CSS and Markdown warnings
    cat > "$VSCODE_SETTINGS" << 'EOF'
{
    "cSpell.words": [
        "Däshaun",
        "Juneteenth", 
        "Stegner",
        "waitlist",
        "markdownlint",
        "tailwind",
        "globals"
    ],
    "css.validate": false,
    "scss.validate": false,
    "less.validate": false,
    "css.lint.unknownAtRules": "ignore",
    "markdownlint.enable": false,
    "cSpell.enabled": false
}
EOF

    # Disable markdownlint completely
    cat > "$MARKDOWNLINT_CONFIG" << 'EOF'
{
    "default": false
}
EOF
    
    echo "✅ All linting warnings disabled!"
}

# Function to enable linting warnings (with Tailwind exceptions)
enable_warnings() {
    echo "🔊 Enabling linting warnings (with smart exceptions)..."
    
    # Update VS Code settings to allow linting but ignore Tailwind issues
    cat > "$VSCODE_SETTINGS" << 'EOF'
{
    "cSpell.words": [
        "Däshaun",
        "Juneteenth",
        "Stegner", 
        "waitlist",
        "markdownlint",
        "tailwind",
        "globals"
    ],
    "css.validate": true,
    "scss.validate": true,
    "less.validate": true,
    "css.lint.unknownAtRules": "ignore",
    "markdownlint.enable": true,
    "cSpell.enabled": true,
    "markdownlint.config": {
        "MD034": false,
        "MD040": false
    }
}
EOF

    # Enable basic markdownlint with common exceptions
    cat > "$MARKDOWNLINT_CONFIG" << 'EOF'
{
    "default": true,
    "MD034": false,
    "MD040": false,
    "MD031": false,
    "MD032": false
}
EOF
    
    echo "✅ Linting enabled with smart exceptions!"
}

# Check command line argument
case "$1" in
    "off"|"disable")
        disable_warnings
        ;;
    "on"|"enable") 
        enable_warnings
        ;;
    *)
        echo "Usage: $0 [on|off]"
        echo "  on/enable  - Enable linting with smart exceptions"
        echo "  off/disable - Completely disable all linting warnings"
        exit 1
        ;;
esac
