# MyBatis SQL Formatter
![Logo](https://github.com/hks2002/mybatis-sql-formatter/raw/master/images/icon.png)

![Github Version](https://img.shields.io/github/package-json/v/hks2002/mybatis-sql-formatter)
![Github Build Status](https://img.shields.io/github/actions/workflow/status/hks2002/mybatis-sql-formatter/Build.yml)
![GitHub License](https://img.shields.io/github/license/hks2002/mybatis-sql-formatter)
![GitHub Starts](https://img.shields.io/github/stars/hks2002/mybatis-sql-formatter)
![VS marketplace Version](https://img.shields.io/visual-studio-marketplace/v/MerBleueAviation.mybatis-sql-formatter)
![downloads](https://img.shields.io/visual-studio-marketplace/d/MerBleueAviation.mybatis-sql-formatter)
![installs](https://img.shields.io/visual-studio-marketplace/i/MerBleueAviation.mybatis-sql-formatter)
![rating](https://img.shields.io/visual-studio-marketplace/r/MerBleueAviation.mybatis-sql-formatter)

[English](./README.md) | [简体中文](./README.zh-cn.md)

A VS Code extension to format MyBatis XML files and SQL fragments containing MyBatis dynamic tags.

## Features

- **Format MyBatis XML**: Correctly formats `<mapper>`, `<select>`, `<insert>`, `<update>`, `<delete>` and other MyBatis tags with proper indentation.
- **Format SQL Fragments**: Supports formatting raw SQL fragments mixed with MyBatis dynamic tags (like `<if>`, `<choose>`, `<where>`, `<foreach>`) directly, without needing a root XML element.
- **SQL Indentation**: Formats the SQL content inside MyBatis tags using standard SQL formatting rules while preserving MyBatis tag structure.

## Usage

1. Open a MyBatis XML file (`.xml`) or a file containing MyBatis SQL (`.sql`).
2. Run the command **Format Document** (`Shift+Alt+F` on Windows) or right-click and select **Format Document**.
3. Alternatively, use the dedicated command **Format MyBatis SQL** or the shortcut:
   - Windows: `Ctrl+Win+F`
   - Mac: `Ctrl+Cmd+F`
   - Linux: `Ctrl+Meta+F`

## Requirements

None.

## Extension Settings

No configuration needed yet.

